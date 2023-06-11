import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';

const ClassesCard = ({ classes, darkMode }) => {
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();

    const handleDenied = () => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Can not buy this course, The class is already full',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const { _id, name, numberOfStudents, availableSeats, price, image, instructorName, status } = classes;
    const handleCart = (id) => {
        axios.get(`${import.meta.env.VITE_SERVER_API}/classes/${id}`)
            .then(res => {
                const useremail = user.email;
                const instEmail = res.data.instructorEmail
                const price = res.data.price;
                const instructorName = res.data.instructorName;
                const name = res.data.name;
                const cartItem = {
                    usermail: useremail,
                    instractoremail: instEmail,
                    instructorName: instructorName,
                    price: price,
                    name: name,
                    itemId: _id
                };

                axios.post(`${import.meta.env.VITE_SERVER_API}/classes`, cartItem)
                    .then(res => {
                        if (res.statusText == 'OK') {
                            refetch()
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Item hasbeen added to the cart',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                    .catch(error => console.log(error))
            })
    }

    if (status == 'approved') {
        return (
            <div className={` relative ${darkMode ? 'popularCard' : 'card'} card-compact  shadow-xl`}>
                <div className='pt-2'>
                    <figure><img src={image} className='h-[300px]' alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Students: {numberOfStudents}</p>
                    <p>Available Seats: {availableSeats}</p>
                    <p>Instructor: {instructorName} </p>
                    <p className={` absolute right-4 top-5 ${darkMode ? 'text-amber-600 bg-black font-semibold p-4' : 'text-white font-semibold bg-black p-2'}  text-2xl`}>Price: ${price}</p>

                    <div className="card-actions justify-cneter">
                        {
                            availableSeats == 0 ?
                                <>
                                    <button className=" bg-red-800 p-4 w-full text-white" onClick={handleDenied}>Class Full/ Access Denied</button>
                                </>
                                :
                                <>
                                    <button className="btn btn-primary w-full" onClick={() => handleCart(_id)}>ADD TO CART</button>
                                </>
                        }
                    </div>


                </div>
            </div>
        );
    }
}

export default ClassesCard;
