import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500 px) {
    width: 360px;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    > *:first-child {
      font-size: 13px;
    }
    > *:last-child {
      font-size: 13px;
      padding:0 8px;

  }
  }
`;