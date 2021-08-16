import { CardItemType } from './../../types/GamePageTypes/types';
import { shuffleArray } from './../../utils/utils';
import { actions } from '../actions/actions';
import { gameReducerInitialState, GameDataType } from '../initialState';

const gameReducer = (state: GameDataType = gameReducerInitialState, action: any): GameDataType => {
  switch (action.type) {
    case actions.START_GAME :
      return {
        ...state,
        gameProcess: { ...state.gameProcess, isStartGame: true }
      };

    // --------------------------------

    case actions.FINISH_GAME :
      const isAllCardsFounded = findAllSelectedCard(state.cardsList);

      return {
        ...state,
        gameProcess: { ...state.gameProcess, isFinidhed: true, isSuccess: isAllCardsFounded, isStartGame: false },
      };
    
    // --------------------------------

    case actions.CLEAR_RESULT_GAME :
      return {
        ...state,
        cardsList: shuffleArray(gameReducerInitialState.cardsList),
        gameProcess: { ...state.gameProcess, isFinidhed: false, isSuccess: false },
        history: [],
      };
     
    // --------------------------------

    case actions.CHANGE_HISTORY_GAME :
      const { firstCardTitle, secondCardTitle } = action.historyItem
      return {
        ...state,
        history: [...state.history, [firstCardTitle, secondCardTitle]]
      };

    // --------------------------------

    case actions.SELECT_CARD :
      const { firstCard, secondCard } = action.pairCards
      const newState = { ...state }

      const newCardsList = state.cardsList.map((card: CardItemType) => {
        if (card.id === firstCard.id || card.id === secondCard.id) {
          return { ...card, isFounded: true }
        }
        return card
      })
      
      newState.cardsList = newCardsList;

      const isAllCardFounded = findAllSelectedCard(newCardsList);

      if (isAllCardFounded) {
        newState.gameProcess = { ...newState.gameProcess, isFinidhed: true, isSuccess: true, isStartGame: false }
      }

      newState.history = [ ...newState.history, [firstCard.title, secondCard.title]]

      return {
        ...newState,
      };

    // --------------------------------
    
    default:
      return state;
  }
};
  
export default gameReducer;

const findAllSelectedCard = (cardsList: CardItemType[]): boolean => {
  let isAllCardsFounded = true;

  cardsList.forEach((card: CardItemType) => {
    if (!card.isFounded) {
      isAllCardsFounded = false;
    }
  })

  return isAllCardsFounded
}