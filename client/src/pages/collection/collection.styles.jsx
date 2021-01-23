import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CollectionTitleContainer = styled.div`
   @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: darkslategray;
    margin: 10px auto;
    width: 84vw;
    height: 50px;
    border-radius: 10px;
  }
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;

  @media screen and (max-width: 800px) {
    color: white;
    font-size: 32px;
    margin: 0 auto;
  }
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;