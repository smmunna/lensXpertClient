import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=' md:py-36 lg:px-52 lg:py-16'>
            <div className='p-12 md:flex justify-center items-center gap-10'>
                <div className='my-10'>
                    <img src="https://raw.githubusercontent.com/smmunna/b7a11-toy-marketplace-client-side-smmunna/main/learning-light-house-client/src/assets/images/error404.png?token=GHSAT0AAAAAAB4ZYSPYF55FJBDAYUPVKMAQZEALCOA" alt="" />
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