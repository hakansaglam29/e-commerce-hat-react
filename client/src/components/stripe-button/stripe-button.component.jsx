import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IAMhYGDL55fVdFCSqrN7fpBHy7ojdTMCGFd6dLIMzZUyQ02pMTm9sNThDlOi44vVVNL7jOOcb7aYrQebBaS6Dbd00zLyh1Ucl'


    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert(' Payment is successful')
        }).catch(error => {
            console.log('Payment error: ',  JSON.parse(error));
            alert(' There was an issue with your payment. Please sure you use the provided credit cart');
        })
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

export default React.memo(StripeCheckoutButton);