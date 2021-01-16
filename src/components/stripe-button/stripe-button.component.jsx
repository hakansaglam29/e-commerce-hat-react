import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IAMhYGDL55fVdFCSqrN7fpBHy7ojdTMCGFd6dLIMzZUyQ02pMTm9sNThDlOi44vVVNL7jOOcb7aYrQebBaS6Dbd00zLyh1Ucl'


    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='ModaNet Clothing Ltd.'
            currency='USD'
            allowRememberMe={true}
            token={onToken}
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;