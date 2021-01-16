import './cart-dropdown.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toogleCartHidden } from '../../redux/cart/cart.actions';

import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ toogleCartHidden, cartItems, history }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                    ) : (
                            <span className='emty-message'>Your cart is empty</span>
                        )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                    toogleCartHidden();
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CartDropdown));