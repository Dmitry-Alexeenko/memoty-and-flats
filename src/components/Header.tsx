import styled from 'styled-components';
import { Link } from "react-router-dom";

import { PageContainer } from '../styles/styles';

export const Header = () => (
  <HeaderContainer>
    <PositionContainer>
      <HeaderTitle>Memory and Flats</HeaderTitle>
      
      <HeaderLinks>
        <HeaderLink to="/">Flats</HeaderLink>
        <HeaderLink to="/game">Memory Game</HeaderLink>
      </HeaderLinks>
    </PositionContainer>
  </HeaderContainer>
)

const HeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: #e1bee7;
`

const PositionContainer = styled(PageContainer)`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
`

const HeaderTitle = styled.h1`
  display: block;
  margin: 0;
  padding: 0;
  font-size: 20px;
  @media screen and (max-width: 400px) {
    display: none;
  }
`

const HeaderLinks = styled.div`
  display: flex;
`

const HeaderLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: black;
  :first-child {
    padding-right: 20px;
  }
`
