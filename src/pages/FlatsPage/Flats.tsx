/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import styled from 'styled-components';
import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { PageContainer } from '../../styles/styles';
import { Flat } from "./Flat";
import { getFlats, selectFaviritesFlatsAction } from '../../redux/reducers/flats-reducer';
import { FlatItemType } from '../../types/FlatsPageTypes/types';
import { ReduxStateType } from '../../types/types';

export const FlatsPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const flatsD: FlatItemType[] = useSelector((state: ReduxStateType) => state.flatsReducer.flats, shallowEqual)

  useEffect(() => {
    dispatch(getFlats())
  }, [])

  const selectFavirites = (flatId: string) => dispatch(selectFaviritesFlatsAction(flatId))

  const flats = flatsD.map((flatItem) => (
    <Flat
      key={flatItem.id}
      id={flatItem.id}
      name={flatItem.name}
      cost={flatItem.cost}
      place={flatItem.place}
      isFavorites={flatItem.isFavorites}
      selectFavirites={selectFavirites}
    />
  ))

  return (
    <PageContainer>
      <FlatsContainer>{flats}</FlatsContainer>
    </PageContainer>
  );
}

const FlatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
