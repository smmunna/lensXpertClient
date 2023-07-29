import React, { useContext } from 'react';
import UsePayments from '../../hooks/usePayments';
import moment from 'moment/moment';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { DarkModeContext } from '../../contexts/DarkMode';


const AdminPaymentHistory = () => {
    const [payments, refetch] = UsePayments();
    const { darkMode } = useContext(DarkModeContext)



    const handlePaymentPending = (id) => {
        axios.post(`${import.meta.env.VITE_SERVER_API}/paymenthistory/${id}`)
            .then(res => {
                if (res.status == 200) {
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
            .catch(error => {
                console.log(error)
            })
    }


    // Handle Accept CLass by Admin
    const handleAcceptClass = (id) => {
        axios.patch(`${import.meta.env.VITE_SERVER_API}/updatestudentsnumber/${id}`)
            .then(res => {
                if (res.status == 200) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class hasbeen Accepted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
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
                            <th className='text-center'>Accept Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.map((paymentItem, index) => <React.Fragment key={paymentItem._id}>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{paymentItem.email}</td>
                                    <td>{paymentItem.transactionid}</td>
                                    <td>{moment(paymentItem.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                    <td>{paymentItem.status == 'pending' ? <><span onClick={() => handlePaymentPending(paymentItem._id)} className='text-white bg-orange-600 p-2 cursor-pointer'>Pending</span></> : <><span className='text-white p-2 bg-green-600'>Completed</span></>}</td>

                                    <td className='flex'>
                                        {paymentItem.itemid.map((id, index) => (
                                            <button className={`mr-2 ${darkMode ? 'text-white btn btn-outline' : 'btn btn-outline'} `} key={index} onClick={() => handleAcceptClass(id)}>
                                                Class {index + 1}
                                            </button>
                                        ))}
                                    </td>


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
