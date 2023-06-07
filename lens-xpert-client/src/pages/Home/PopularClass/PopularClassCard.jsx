import React from 'react';

const PopularClassCard = ({ popular, darkMode }) => {
    const { _id, name, numberOfStudents, availableSeats, price, image } = popular
    return (
        <div className={`${darkMode ? 'popularCard' : 'card'} card-compact  shadow-xl`}>
            <div className='pt-2'>
                <figure><img src={image} className='h-[300px]' alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Students: {numberOfStudents}</p>
                <p>Available Seats: {availableSeats}</p>
                <p>Price: {price}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
}

export default PopularClassCard;
