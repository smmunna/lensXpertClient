import React from 'react';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';
import axios from 'axios';

const Carts = () => {
    const [carts, refetch] = useCart()

    const totalPrice = carts.reduce((total, cartItem) => {
        return total + cartItem.price;
    }, 0);

    const handleDeleteItem = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`${import.meta.env.VITE_SERVER_API}/carts/${id}`)
                    .then(res => {
                        if (res.statusText == 'OK') {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your cart item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className='p-8'>
                <h3 className='text-2xl ml-2'>Total Items: {carts.length}</h3>
                <h3 className='text-2xl ml-2'>Total Price: ${totalPrice}</h3>
                <button className='btn btn-accent mt-3'>Pay Now</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-white'>
                            <th></th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            carts.map((cartItem, index) => <>
                                <tr key={cartItem._id}>
                                    <th>{index + 1}</th>
                                    <td>{cartItem.name}</td>
                                    <td>{cartItem.instructorName}</td>
                                    <td>${cartItem.price}</td>
                                    <td>
                                        <button className='btn btn-error' onClick={() => handleDeleteItem(cartItem._id)}>X</button>
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

export default Carts;
