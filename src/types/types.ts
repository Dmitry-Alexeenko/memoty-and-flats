import { FlatsDataType, GameDataType } from './../redux/initialState';

export interface ReduxStateType {
  gameReducer: GameDataType,
  flatsReducer: FlatsDataType,
}