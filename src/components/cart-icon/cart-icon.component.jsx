import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import {selectCartItemCount} from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const CartIcon = ({toogleCartHidden, itemCount}) => {
    return (
        <div className='cart-icon' onClick={toogleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
  });

const mapStateToProps = (state) => ({
    itemCount: selectCartItemCount(state)
})
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartIcon);