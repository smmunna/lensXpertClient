import React, { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkMode';

const MyClassCard = ({ classItem }) => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={`card h-full w-96  shadow-xl `}>
            <figure><img src={classItem?.image} className='h-[200px]' alt="Shoes" /></figure>
            <div className={`card-body ${darkMode ? 'bg-black text-white' : ''}`}>
                <h2 className="card-title">{classItem.name}</h2>
                <h2>{classItem?.instructorEmail}</h2>
                <h2>{classItem?.instructorName}</h2>
                <h2>Seats: {classItem?.availableSeats}</h2>
                <div className="card-actions">
                    <button className={`${classItem?.status == 'pending' ? 'btn btn-error' : 'btn btn-success'}`}>{classItem?.status == 'pending' ? 'Pending' : 'Approved'}</button>
                </div>
            </div>
        </div>
    );
}

export default MyClassCard;
