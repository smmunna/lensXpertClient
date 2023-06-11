import React, { useContext, useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import axios from 'axios';
import PopularInstructorCard from './PopularInstructorCard';
import './PopularInstructor.css'
import { DarkModeContext } from '../../../contexts/DarkMode';

const PopularInstructor = () => {
    const { darkMode } = useContext(DarkModeContext)
    const [loading, setLoading] = useState(true)

    const [instructor, setInstructor] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_API}/instructors`)
            .then(res => {
                setInstructor(res.data)
                setLoading(false)
            })
    }, [loading])



    return (
        <div>
            <SectionHeading title={`Popular Instructor`} />
            <div className={`flex justify-center items-center ${darkMode ? 'darkMood darkText' : 'lightMood'}`}>
                {
                    loading && <div className='mt-24 text-center text-red-500 text-4xl'><span className="loading loading-bars loading-lg"></span></div>
                }
                <div className={`px-2 md:px-20 py-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12 ${darkMode ? 'darkMood darkText' : 'lightMood'} `}>
                    {
                        instructor.slice(0, 6).map(instructors => <PopularInstructorCard
                            key={instructors._id}
                            instructors={instructors}
                        />)
                    }
                </div>
            </div>
        </div>
    );
}

export default PopularInstructor;
