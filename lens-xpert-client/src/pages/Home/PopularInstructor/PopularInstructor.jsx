import React, { useContext, useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import axios from 'axios';
import PopularInstructorCard from './PopularInstructorCard';
import './PopularInstructor.css'
import { DarkModeContext } from '../../../contexts/DarkMode';

const PopularInstructor = () => {
    const { darkMode } = useContext(DarkModeContext)

    const [instructor, setInstructor] = useState([])
    useEffect(() => {
        axios.get('popularinstructor.json')
            .then(res => setInstructor(res.data))
    }, [])
    return (
        <div>
            <SectionHeading title={`Popular Instructor`} />
            <div className={`flex justify-center items-center ${darkMode ? 'darkMood darkText' : ''}`}>
                <div className={`px-2 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 ${darkMode ? 'darkMood darkText' : ''} `}>
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
