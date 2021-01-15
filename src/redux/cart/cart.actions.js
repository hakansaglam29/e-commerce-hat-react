import {CartActionTypes} from './cart.types';

export const toogleCartHidden = ()=> ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    //payload is optional property 
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})