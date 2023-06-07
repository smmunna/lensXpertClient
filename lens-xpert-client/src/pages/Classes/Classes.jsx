import React, { useContext, useEffect, useState } from 'react';
import Cover from '../../components/Cover/Cover';
import imgCover from "../../assets/images/slider1.jpg";
import ClassesCard from './ClassesCard';
import { DarkModeContext } from '../../contexts/DarkMode';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Classes = () => {
    const { darkMode } = useContext(DarkModeContext)

    const [allClass, setallClass] = useState([])
    useEffect(() => {
        axios.get('popularclass.json')
            .then(res => setallClass(res.data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>All Classes | LensXpert</title>
            </Helmet>
            <Cover title={`All Photography Classes`} img={imgCover} />
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
