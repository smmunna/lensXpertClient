import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useCart from '../../hooks/useCart';
// import './CheckoutForm.css';

const CheckoutForm = ({ price }) => {
    const [carderror, setCarderror] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [successfull, setSuccessful] = useState('');
    const [cart] = useCart();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    // console.log(user.email)

    useEffect(() => {
        axios.post(`${import.meta.env.VITE_SERVER_API}/create-payment-intent`, { price })
            .then(res => {
                // console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCarderror(error.message)
        } else {
            setCarderror('')
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'annonymus',
                        email: user.email || 'unknown'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }



        setProcessing(false)
        if (paymentIntent.status == 'succeeded') {
            setSuccessful(paymentIntent.id)
            const transactionid = paymentIntent.id;
            const paymentInfo = {
                name: user?.displayName,
                email: user?.email,
                transactionid: transactionid,
                itemid: cart.map(item => item._id),
                itemname: cart.map(item => item.name),
                quantity: cart.length,
                price,
                date: new Date(),
                instractoremail: cart.map(item => item.instractoremail),
                status: 'pending'

            }
            axios.post(`${import.meta.env.VITE_SERVER_API}/payments`, paymentInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        alert('Successfull payments')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }


    };

    return (
        <div>
            <h3 className='text-red-600 font-bold p-2'>{carderror && carderror}</h3>
            <h4>{price}</h4>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <div>
                <h3 className='text-green-500'>{successfull && <>Payment successfull, and your transactionid {successfull}</>}</h3>
            </div>
        </div>
    );
}

export default CheckoutForm;
