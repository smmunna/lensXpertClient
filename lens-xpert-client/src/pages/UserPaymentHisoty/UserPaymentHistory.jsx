import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';
import moment from 'moment';

const UserPaymentHistory = () => {
    const [userpayment, setUserpayment] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_API}/userpaymenthistory?email=${user?.email}`)
            .then(res => {
                setUserpayment(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div className='px-12 md:px-24'>
            <h3 className='py-3 text-center text-2xl font-bold'>Payment Status</h3>
            <hr />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-orange-500 bg-gray-700'>
                            <th></th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                            <th>Date & Time</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            userpayment.map((paymentItem, index) => <React.Fragment key={paymentItem._id}>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{paymentItem.email}</td>
                                    <td>{paymentItem.transactionid}</td>
                                    <td>{moment(paymentItem.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                    <td>{paymentItem.status == 'pending' ? <><span className='text-white bg-orange-600 p-2'>Pending</span></> : <><span className='text-white p-2 bg-green-600'>Completed</span></>}</td>
                                </tr>
                            </React.Fragment>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserPaymentHistory;
