import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';

const EnrolledCourse = () => {
    const [userpayment, setUserpayment] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_API}/userpaymenthistory?email=${user?.email}`)
            .then(res => {
                // console.log(res)
                setUserpayment(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div className='px-12 md:px-24'>
            <h3 className='text-center py-3 text-2xl font-semibold'>Enrolled Classes</h3>
            <hr />
            <div className='flex justify-center py-4'>
                <div>
                    <ul className="menu bg-orange-950 text-white  w-full rounded-box">
                        <li>
                            <h2 className=" text-white font-semibold">Photography Classes</h2>
                            <hr />
                            <ul>
                                {
                                    userpayment.map((paymentItem, index) => <React.Fragment key={paymentItem._id}>
                                        {
                                            paymentItem.itemname.map((myitem, index) => <React.Fragment>

                                                <li><>{index+1}. {myitem}</></li>
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
