import React from 'react';
import useUser from '../../hooks/useUser';

const Users = () => {
    const [users, refetch] = useUser();

    const handleDeleteItem=(id)=>{
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
                            users.map((usersItem, index) => <>
                                <tr key={usersItem._id}>
                                    <th key={usersItem._id}>{index + 1}</th>
                                    <td key={index}>{usersItem.name}</td>
                                    <td key={index}>{usersItem.email}</td>
                                    <td className='text-center'>
                                        <button className='btn btn-info'> Make Admin</button>
                                    </td>
                                    <td className='text-center'>
                                        <button className='btn btn-info'>Make Instructor</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-error' onClick={() => handleDeleteItem(usersItem._id)}>X</button>
                                    </td>
                                </tr>
                            </>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
}

export default Users;
