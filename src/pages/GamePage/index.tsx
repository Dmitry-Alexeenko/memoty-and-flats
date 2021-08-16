/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Dispatch } from "redux"
import styled from 'styled-components';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { PageContainer } from '../../styles/styles';
import { Card } from './Card';
import { buildTime } from '../../utils/utils';
import { UseTimer } from '../../hooks/UseTimer';
import { History } from './History/History';
import { startGame, finishGame, clearResultGame, selectCardItem, changeHistoryGame } from '../../redux/actionTypes/actionTypes';
import { CardItemType, SelectedCardType } from '../../types/GamePageTypes/types';
import { GameDataType } from '../../redux/initialState';
import { ReduxStateType } from '../../types/types';

export const GamePage = () => {
  const [munutsPreset, setMinutsPreset] = useState('10')
  const [selectedCards, setSelectedCards] = useState<SelectedCardType[]>([])
  const [temporaryBuffer, setTemporaryBuffer] = useState('')
  const [cardTimer, setCardTimer] = useState<any>(null)

  const dispatch: Dispatch<any> = useDispatch();
  const gameData: GameDataType = useSelector((state: ReduxStateType) => state.gameReducer, shallowEqual)
  const { cardsList, gameProcess, history} = gameData

  const { ms, start, clear } = UseTimer(() => { dispatch(finishGame()) })

  useEffect(() => {
    if (gameProcess.isFinidhed) clear()
  }, [gameProcess.isFinidhed])

   // --------------------------------

   const onStart = () => {
    dispatch(startGame())
    start(+munutsPreset * 60 * 1000);
  }

  // --------------------------------

  const onClearResult = () => (dispatch(clearResultGame()))
 
  const clearCardTimer = () => {
    setSelectedCards([])
    if (cardTimer) {
      clearTimeout(cardTimer)
      setCardTimer(null) 
    }
  }

  // --------------------------------

  const selectCard = (idCard: string, title: string) => {
    if (selectedCards.length === 0) {
      setSelectedCards([{ id: idCard, title }])
      setCardTimer(setTimeout(() => {
        setSelectedCards([])
      }, 5000))
    } else {
      if (selectedCards[0].title === title) {
        dispatch(
          selectCardItem(
            {
              firstCard: { id: selectedCards[0].id, title: selectedCards[0].title },
              secondCard: { id: idCard, title }
            }
          )
        )

        clearCardTimer()
      } else {
        dispatch(changeHistoryGame({ firstCardTitle: selectedCards[0].title, secondCardTitle: title }))
        clearCardTimer()
        setTemporaryBuffer(idCard)
        setTimeout(() => {
          setTemporaryBuffer('')
        }, 200)
      }
    }
  }

  return (
    <Container>
      <CardsContainer>
        {cardsList.map((card: CardItemType) => (
          <Card
            key={card.id}
            title={card.title}
            id={card.id}
            isVisible={!gameProcess.isStartGame || (Boolean(selectedCards[0] && selectedCards[0].id === card.id) || temporaryBuffer === card.id)}
            isFounded={card.isFounded}
            selectCard={selectCard}
          />
        ))}
      </CardsContainer>

      <GameInfo>
        {gameProcess.isStartGame && (<Time>Время: {buildTime(ms)}</Time>)}

        <div>
          {!gameProcess.isStartGame && !gameProcess.isFinidhed && (
            <select onChange={ (ev) => setMinutsPreset(ev.target.value)} value={munutsPreset}>
              <option value="3">3 минуты</option>
              <option value="5">5 минут</option>
              <option value="7">7 минут</option>
              <option value="10">10 минут</option>
              <option value="15">15 минут</option>
            </select>
          )}

          {gameProcess.isFinidhed && (
            <ActionBtn onClick={onClearResult}>Очистить результат</ActionBtn>
          )}

          {!gameProcess.isStartGame && !gameProcess.isFinidhed && (
            <ActionBtn onClick={onStart}>Начать игру</ActionBtn>
          )}
        </div>
        
        {gameProcess.isFinidhed && (
          <History history={history} isSuccess={gameProcess.isSuccess} /> 
        )}
      </GameInfo>
    </Container>
  );
}

const Container = styled(PageContainer)`
  display: flex;
`

const CardsContainer = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #c5e1a5;
  border-radius: 8px;
  overflow: hidden;
`

const Time = styled.span`
  display: inline-block;
  border: 1px solid #c5e1a5;
  border-radius: 8px;
  padding: 8px;
`

const GameInfo = styled.div`
  margin-left: 10px;
`

const ActionBtn = styled.button`
  padding: 8px 12px;
  margin: 0 10px 0 10px;
  color: black;
  border-style: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #c5e1a5;
  font-weight: bold;
  font-size: 14px;
`
