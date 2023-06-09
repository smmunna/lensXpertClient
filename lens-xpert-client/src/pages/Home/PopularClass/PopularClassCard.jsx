import React from 'react';
import { Link } from 'react-router-dom';

const PopularClassCard = ({ popular, darkMode }) => {
    const { _id, name, numberOfStudents, availableSeats, price, image } = popular
    return (
        <Link to="/classes">
            <div className={`${darkMode ? 'popularCard' : 'card'} card-compact  shadow-xl`}>
                <div className='pt-2'>
                    <figure><img src={image} className='h-[300px]' alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Students: {numberOfStudents}</p>
                    <p>Available Seats: {availableSeats}</p>
                    <p className={` ${darkMode ? 'text-amber-600' : 'text-white bg-black p-2'}  text-lg`}>Price: ${price}</p>
                </div>
            </div>
        </Link>
    );
}

export default PopularClassCard;
