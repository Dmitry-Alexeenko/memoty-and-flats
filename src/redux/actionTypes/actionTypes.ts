import { SelectedCardType } from '../../types/GamePageTypes/types';
import { actions } from './../actions/actions';

interface HistoryItemType {
  firstCardTitle: string,
  secondCardTitle: string,
}

interface PairCardsItemType {
    firstCard: SelectedCardType,
    secondCard: SelectedCardType,
  }

export const getCards = () => ({ type: actions.GET_CARDS })
export const startGame = () => ({ type: actions.START_GAME })
export const finishGame = () => ({ type: actions.FINISH_GAME })
export const clearResultGame = () => ({ type: actions.CLEAR_RESULT_GAME })
export const changeHistoryGame = (payload: HistoryItemType) => ({ type: actions.CHANGE_HISTORY_GAME, historyItem: payload })
export const selectCardItem = (payload: PairCardsItemType) => ({ type: actions.SELECT_CARD, pairCards: payload })


