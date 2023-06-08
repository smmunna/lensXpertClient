import React, { useContext, useEffect, useState } from 'react';
import Cover from '../../components/Cover/Cover';
import imgCover from "../../assets/images/slider1.jpg";
import ClassesCard from './ClassesCard';
import { DarkModeContext } from '../../contexts/DarkMode';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Classes = () => {
    const { darkMode } = useContext(DarkModeContext)
    const [loading, setLoading] = useState(true)

    const [allClass, setallClass] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_API}/classes`)
            .then(res => {
                setallClass(res.data)
                setLoading(false)
            })
    }, [])



    return (
        <div>
            <Helmet>
                <title>All Classes | LensXpert</title>
            </Helmet>
            <Cover title={`All Photography Classes`} img={imgCover} />
            {
                loading && <div className='mt-24 text-center text-red-500 text-4xl'><span className="loading loading-bars loading-lg"></span></div>
            }

            <div className={`px-2 md:px-12 py-8 pt-5 ${darkMode ? 'darkMood darkText' : 'lightMood'}`}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        allClass.map(classes => <ClassesCard
                            key={classes._id}
                            classes={classes}
                            darkMode={darkMode}
                        />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Classes;
