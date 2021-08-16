import { FlatItemType } from './../../types/FlatsPageTypes/types';
import { apiRequests } from './../../api/apiRequests';
import { actions } from '../actions/actions';
import { FlatsDataType, flatsReducerInitialState } from '../initialState';

const flatsReducer = (state: FlatsDataType = flatsReducerInitialState, action: any): FlatsDataType => {
  switch (action.type) {
    case actions.GET_FLATS :
      return {
        ...state,
        flats: action.flatsData
      };

    // --------------------------------

    case actions.SELECT_FAVORITES_FLAT :
      const flatId = action.flatId
      const newFlatsState = state.flats.map((flatItem) => {
        if (flatItem.id === flatId) {
          return { ...flatItem, isFavorites: !flatItem.isFavorites }
        }

        return flatItem
      })

      return {
        ...state,
        flats: newFlatsState
      };

    // --------------------------------

    default:
      return state;
  }
};
  
export default flatsReducer;

const getFlatsAction = (flatsData: FlatItemType[]) => ({ type: actions.GET_FLATS, flatsData })
export const selectFaviritesFlatsAction = (flatId: string) => ({ type: actions.SELECT_FAVORITES_FLAT, flatId })

export const getFlats = () => async (dispatch: any) => {
  const response = apiRequests.getFlats();
  if (response && response.status === 200) {
    dispatch(getFlatsAction(response.data.flats));
  }
};