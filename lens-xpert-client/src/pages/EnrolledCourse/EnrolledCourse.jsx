import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const EnrolledCourse = () => {
    const [userpayment, setUserpayment] = useState([])
    const [itemId, setItemid] = useState([])
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
            <Helmet>
                <title>Enrolled Class | LensXpert</title>
            </Helmet>
            <h3 className='text-center py-3 text-2xl font-semibold'>Enrolled Classes</h3>
            <hr />
            <div className='flex justify-center py-4'>
                <div>
                    <ul className="menu bg-orange-950 text-white rounded-box ">
                        <li>
                            <h2 className=" text-white font-semibold">Photography Classes</h2>
                            <hr />
                            <ul>
                                {
                                    userpayment.map((paymentItem, index) => <React.Fragment key={paymentItem._id}>
                                        {
                                            paymentItem.itemname.map((myitem, index) => <React.Fragment key={index + 1}>

                                                <li className='mr-5'><>🤴 {myitem}</></li>
                                            </React.Fragment>)
                                        }
                                    </React.Fragment>)
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default EnrolledCourse;
