import styled from 'styled-components';

interface CardType {
  id: string,
  title: string,
  isVisible: boolean,
  isFounded: boolean,
  selectCard: (cardId: string, title: string) => void,
}

export const Card = ({
  id,
  title,
  isVisible,
  isFounded,
  selectCard,
}: CardType) => {
  const onSelectCard = () => {
    if (isVisible === false && isFounded === false) {
      selectCard(id, title)
    }
  }

  return (
    <CardContainer onClick={ onSelectCard } isFounded={isFounded} isVisible={isVisible || isFounded}>
      <span>{isVisible || isFounded ? title : '?'}</span>
    </CardContainer>
  );
}

const CardContainer = styled.div<{
  isFounded?: boolean;
  isVisible: boolean;
}>`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px dotted #c5e1a5;
  cursor: ${({ isVisible }) => (isVisible ? 'auto' : 'pointer')};
  color: ${({ isVisible }) => (isVisible ? '#000000' : '#bdbdbd')};
  background-color: ${({ isFounded }) => (isFounded ? 'green': 'transparent')};
  > span {
    font-size: 22px;
    font-weight: bold;
  }
`