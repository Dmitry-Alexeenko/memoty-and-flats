export type HistoryItemType = string[]

export interface CardItemType {
  id: string,
  title: string,
  isFounded: boolean,
}

export type SelectedCardType = Omit<CardItemType, 'isFounded'>