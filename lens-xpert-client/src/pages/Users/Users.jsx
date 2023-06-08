import React from 'react';
import useUser from '../../hooks/useUser';
import axios from 'axios';
import Swal from 'sweetalert2';

const Users = () => {
    const [users, refetch] = useUser();

    const handleInstructor = (id)=>{
            axios.post(`${import.meta.env.VITE_SERVER_API}/users/instructor/${id}`)
            .then(res=>{
                refetch()
                if(res.statusText=='OK'){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Instructor hasbeen made successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }
    // Admin Handleing
    const handleAdmin = (id)=>{
            axios.post(`${import.meta.env.VITE_SERVER_API}/users/admin/${id}`)
            .then(res=>{
                refetch()
                if(res.statusText=='OK'){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Admin hasbeen made successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    

    const handleDeleteItem = (id) => {
        console.log(id)
    }

    return (
        <div>
            <div className='p-8'>
                <h3 className='text-2xl ml-2'>Total User: {users?.length}</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-yellow-600'>
                            <th></th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th colSpan={2} className='text-center'>Role</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            users.map((usersItem, index) => <React.Fragment key={usersItem._id}>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{usersItem.name}</td>
                                    <td>{usersItem.email}</td>
                                    <td className='text-center'>
                                        {
                                            usersItem.role == 'admin' ?
                                                <>
                                                    <button disabled className='btn btn-info'> Make Admin</button>
                                                </>
                                                :
                                                <>
                                                    <button className='btn btn-info' onClick={()=>handleAdmin(usersItem._id)}> Make Admin</button>
                                                </>
                                        }
                                    </td>
                                    <td className='text-center'>
                                        {
                                            usersItem.role == 'instructor' ?
                                                <>
                                                    <button disabled className='btn btn-info'> Make Instructor</button>
                                                </>
                                                :
                                                <>
                                                    <button className='btn btn-info' onClick={()=>handleInstructor(usersItem._id)}> Make Instructor</button>
                                                </>
                                        }
                                    </td>
                                    <td>
                                        <button className='btn btn-error' onClick={() => handleDeleteItem(usersItem._id)}>X</button>
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

export default Users;
