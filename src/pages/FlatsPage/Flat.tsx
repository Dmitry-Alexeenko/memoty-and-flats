import styled from 'styled-components';

import flatIcon from '../../images/flat1.jpeg';
import heartIcon from '../../images/heart.svg';
import heartRedIcon from '../../images/heart-red.svg';

interface FlatType {
  id: string,
  name: string,
  cost: number,
  place: string,
  isFavorites: boolean,
  selectFavirites: (id: string) => void,
}

export const Flat = ({
  id,
  name,
  cost,
  place,
  isFavorites,
  selectFavirites,
}: FlatType) => (
  <FlatContainer>
    <FlatImage />

    <FlatInfo>
      <FlatFavoritesBtn onClick={() => selectFavirites(id) } isFavorites={isFavorites} />
      <FlatTitle title={name}>{name}</FlatTitle>
      <FlatCost>{cost} ₽</FlatCost>
      <FlatPlace title={place}>{place}</FlatPlace>
    </FlatInfo>
  </FlatContainer>
)

const FlatContainer = styled.div`
  width: 280px;
  height: 285px;
  margin: 0px 5px 10px 5px;
  background-color: #eeeeee;
  border-radius: 8px;
  overflow: hidden;
`

const FlatInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 5px;
`

const FlatImage = styled.div`
  width: 280px;
  height: 210px;
  background-image: url(${flatIcon});
  background-repeat: no-repeat;
  background-size: cover;
`

const FlatTitle = styled.h3`
  width: calc(100% - 26px);
  margin: 0 0 5px 0;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: #009cf0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const FlatFavoritesBtn = styled.button<{
  isFavorites?: boolean;
}>`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 6px;
  right: 5px;
  border-style: none;
  background-image: url(${({ isFavorites }) => (isFavorites ? heartRedIcon : heartIcon)});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`

const FlatCost = styled.span`
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const FlatPlace = styled.span`
  font-size: 14px;
  color: #8f8f8f;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
