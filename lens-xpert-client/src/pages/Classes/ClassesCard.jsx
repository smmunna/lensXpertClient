import React from 'react';

const ClassesCard = ({ classes, darkMode }) => {
    const { _id, name, numberOfStudents, availableSeats, price, image } = classes
    return (
        <div className={` relative ${darkMode ? 'popularCard' : 'card'} card-compact  shadow-xl`}>
            <div className='pt-2'>
                <figure><img src={image} className='h-[300px]' alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Students: {numberOfStudents}</p>
                <p>Available Seats: {availableSeats}</p>
                <p className={` absolute right-4 top-5 ${darkMode ? 'text-amber-600 bg-black font-semibold p-4' : 'text-white font-semibold bg-black p-2'}  text-2xl`}>Price: ${price}</p>
                <div className="card-actions justify-cneter">
                    <button className="btn btn-primary w-full">Enroll Now</button>
                </div>
            </div>
        </div>
    );
}

export default ClassesCard;
