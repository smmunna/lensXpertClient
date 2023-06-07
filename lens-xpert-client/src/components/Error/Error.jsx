import React from 'react';
import { Link } from 'react-router-dom';
import errorPG from "../../assets/images/errorpage.jpg"
const Error = () => {
    return (
        <div className=' md:py-36 lg:px-52 lg:py-0'>
            <div className='p-12 md:flex justify-center items-center gap-10'>
                <div className='my-10'>
                    <img src={errorPG} alt="" />
                </div>
                <div className='w-2/3'>
                    <div>
                        <h3 className="text-2xl text-red-600 mb-5">No Routes Exist, Check again.. !!</h3>
                        <Link to="/"><button className='btn btn-success'>Go back to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;