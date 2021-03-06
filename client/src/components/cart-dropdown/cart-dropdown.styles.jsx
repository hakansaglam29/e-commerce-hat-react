import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  ::-webkit-scrollbar {
      width: 8px;
    }
    
    /* Track */
  ::-webkit-scrollbar-track {
      border-radius: 10px;
      border: none;
      background: transparent;
    }
     
    /* Handle */
  ::-webkit-scrollbar-thumb {
      background: rgb(207, 207, 207); 
      border-radius: 10px;
    }
    
    /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: rgb(59, 59, 59); 
    }
`;