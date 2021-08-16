import styled from 'styled-components';
import { HistoryItemType } from '../../../types/GamePageTypes/types';

interface HistoryPropTypes {
  isSuccess: boolean,
  history: HistoryItemType[],
}

export const History = ({ isSuccess, history }: HistoryPropTypes) => {
  let successAttemptCount = 0;

  const historyList = history.map((historyItem: HistoryItemType, index: number) => {
    if (historyItem[0] === historyItem[1]){
      successAttemptCount += 1;
    }

    return (
      <HistoryItem key={`${historyItem[0]}${index}`} isSuccess={historyItem[0] === historyItem[1]}>
        {historyItem[0]}, {historyItem[1]}
      </HistoryItem>
    )
  })

  return (
    <div>
      <h3>Игра закончилась. {isSuccess ? 'Вы нашли все карты' : `Вы нашли ${successAttemptCount * 2} из 36 карт`}</h3>
      <HistoryTitle>История:</HistoryTitle>
      <HistoryContainer>{historyList}</HistoryContainer>
    </div>  
  );
}

const HistoryTitle = styled.h4`
  margin: 0 0 8px 0;
`

const HistoryContainer = styled.div`
  max-height: 350px;
  max-width: 250px;
  border: 1px solid #c5e1a5;
  border-radius: 8px;
  overflow-y: auto;
  padding: 10px;
`

const HistoryItem = styled.p<{
  isSuccess: boolean;
}>`
  padding: 0;
  margin: 0;
  color: ${({ isSuccess }) => (isSuccess ? '#1b5e20' : '#d84315')};
  border-bottom: 1px solid #b0bec5;
  padding: 0 5px 3px 0;
  margin-bottom: 6px;
  :last-child {
    margin-bottom: 0px;
  }
`
