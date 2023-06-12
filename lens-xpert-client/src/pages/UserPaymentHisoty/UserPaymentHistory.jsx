import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';
import moment from 'moment';
import { Helmet } from 'react-helmet';

const UserPaymentHistory = () => {
    const [userpayment, setUserpayment] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_API}/userpaymenthistory?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => {
                setUserpayment(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div className='px-12 md:px-24'>
            <Helmet>
                <title>User Payments | LensXpert</title>
            </Helmet>
            <h3 className='py-3 text-center text-2xl font-bold'>Payment Status</h3>
            <hr />
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
                {
                    userpayment.map((paymentItem, index) => <React.Fragment key={paymentItem._id}>
                        <div className='p-4 border-2 mt-2'>
                            <h3>{index + 1}.</h3>
                            <div><span className='font-semibold'>Email:</span> {paymentItem.email}</div>
                            <div><span className='font-semibold'>TID:</span> {paymentItem.transactionid}</div>
                            <div><span className='font-semibold'>Date:</span> {moment(paymentItem.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
                            <div className='mt-3'>{paymentItem.status == 'pending' ? <><span className='text-white bg-orange-600 p-2'>Pending</span></> : <><span className='text-white p-2 bg-green-600'>Completed</span></>}</div>
                        </div>
                    </React.Fragment>)
                }
            </div>
        </div>
    );
}

export default UserPaymentHistory;
