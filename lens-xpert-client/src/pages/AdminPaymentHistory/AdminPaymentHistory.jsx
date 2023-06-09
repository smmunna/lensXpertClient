import React from 'react';
import UsePayments from '../../hooks/usePayments';
import moment from 'moment/moment';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AdminPaymentHistory = () => {
    const [payments,refetch] = UsePayments();
    const handlePaymentPending=(id)=>{
        axios.post(`${import.meta.env.VITE_SERVER_API}/paymenthistory/${id}`)
        .then(res=>{
            if(res.statusText=='OK'){
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Accepted the Payments',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='px-12 md:px-24'>
        <Helmet>
            <title>Payment History | LensXpert</title>
        </Helmet>
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
                            payments.map((paymentItem, index) => <React.Fragment key={paymentItem._id}>
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{paymentItem.email}</td>
                                    <td>{paymentItem.transactionid}</td>
                                    <td>{moment(paymentItem.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                    <td>{paymentItem.status=='pending'?<><span onClick={()=>handlePaymentPending(paymentItem._id)} className='text-white bg-orange-600 p-2 cursor-pointer'>Pending</span></>:<><span className='text-white p-2 bg-green-600'>Completed</span></>}</td>
                                </tr>
                            </React.Fragment>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminPaymentHistory;
