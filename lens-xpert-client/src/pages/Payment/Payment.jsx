import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../hooks/useCart';
import { Helmet } from 'react-helmet';

const Payment = () => {
    const [carts] = useCart()

    const totalPrice = carts.reduce((total, cartItem) => {
        return total + cartItem.price;
    }, 0);

    const finalPrice = totalPrice.toFixed(2)

    const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PUBLISH_KEY}`);

    return (
        <div>
        <Helmet>
            <title>Payment | LensXpert</title>
        </Helmet>
            <div className='w-2/3 '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={finalPrice} />
                </Elements>
            </div>
        </div>
    );
}

export default Payment;
