import React from 'react';

const InstructorCard = ({ instructors }) => {
    const { _id, name, email, image } = instructors
    return (
        <div className="border-2 p-4">
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src={image} />
                </div>
            </div>
            <div>
                <h3>Name:{name} </h3>
                <h3>Email:{email} </h3>
            </div>
        </div>
    );
}

export default InstructorCard;
