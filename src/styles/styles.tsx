import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-right: 10px;
  padding-left: 10px;
  @media screen and (max-width: 1180px) {
    width: 100%;
  }
  @media screen and (min-width: 1180px) {
    width: 1180px;
    max-width: 1180px;
  }
`;
