import React, { useContext, useEffect, useState } from 'react';
import Cover from '../../components/Cover/Cover'
import Img from '../../assets/images/slider2.jpg'
import { DarkModeContext } from '../../contexts/DarkMode';
import axios from 'axios';
import PopularInstructorCard from '../Home/PopularInstructor/PopularInstructorCard';
import { Helmet } from 'react-helmet';

const Instructor = () => {
    const { darkMode } = useContext(DarkModeContext)

    const [instructor, setInstructor] = useState([])
    useEffect(() => {
        axios.get('popularinstructor.json')
            .then(res => setInstructor(res.data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Instructor List | LensXpert</title>
            </Helmet>
            <Cover title={`All Photography Instructors`} img={Img} />
            <div className={`flex justify-center items-center ${darkMode ? 'darkMood darkText' : 'lightMood'}`}>
                <div className={`px-2 md:px-20 py-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12 ${darkMode ? 'darkMood darkText' : 'lightMood'} `}>
                    {
                        instructor.map(instructors => <PopularInstructorCard
                            key={instructors._id}
                            instructors={instructors}
                        />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Instructor;
