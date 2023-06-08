import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAllClass from '../../hooks/useAllClass';
import Swal from 'sweetalert2';

const ManageClass = () => {
    const [allclass, refetch] = UseAllClass();

    const handlePending = (id) => {
        axios.post(`${import.meta.env.VITE_SERVER_API}/classes/status/${id}`)
            .then(res => {
                if (res.statusText == 'OK') {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Classes hasbeen Approved..',
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
        <div className='md:px-16'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allclass.map((classItem, index) => <React.Fragment key={classItem._id}>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{classItem.name}</td>
                                    <td>{classItem.instructorName}</td>
                                    <td>{classItem.status == 'pending' ?
                                        <>
                                            <button className='p-4 text-white bg-red-600' onClick={() => handlePending(classItem._id)} >Pending </button>
                                        </> :
                                        <>
                                            <button className='p-4 text-white bg-green-600 cursor-default'>Approved</button>
                                        </>}</td>
                                </tr>
                            </React.Fragment>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManageClass;
