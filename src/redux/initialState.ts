import { FlatItemType } from './../types/FlatsPageTypes/types';
import { CardItemType, HistoryItemType } from './../types/GamePageTypes/types';
import { shuffleArray } from './../utils/utils';

const cards = [
  { title: '1', isFounded: false, id: '' },
  { title: '2', isFounded: false, id: '' },
  { title: '3', isFounded: false, id: '' },
  { title: '4', isFounded: false, id: '' },
  { title: '5', isFounded: false, id: '' },
  { title: '6', isFounded: false, id: '' },
  { title: '7', isFounded: false, id: '' },
  { title: '8', isFounded: false, id: '' },
  { title: '9', isFounded: false, id: '' },
  { title: '10', isFounded: false, id: '' },
  { title: '11', isFounded: false, id: '' },
  { title: '12', isFounded: false, id: '' },
  { title: '13', isFounded: false, id: '' },
  { title: '14', isFounded: false, id: '' },
  { title: '15', isFounded: false, id: '' },
  { title: '16', isFounded: false, id: '' },
  { title: '17', isFounded: false, id: '' },
  { title: '18', isFounded: false, id: '' },
] as const

export const pairsCards = cards.concat(cards).map((item, index) => ({ ...item, id: `${index}`}))

// --------------------------------

interface gameProcessType {
  isStartGame: boolean,
  isFinidhed: boolean,
  isSuccess: boolean,
}

export interface GameDataType {
  cardsList: CardItemType[],
  gameProcess: gameProcessType,
  history: HistoryItemType[],
}

export const gameReducerInitialState: GameDataType = {
  cardsList: shuffleArray(pairsCards),
  gameProcess: { isStartGame: false, isFinidhed: false, isSuccess: false },
  history: [],
}

// --------------------------------

export interface FlatsDataType {
  flats: FlatItemType[],
}

export const flatsReducerInitialState: FlatsDataType = {
  flats: [],
}
