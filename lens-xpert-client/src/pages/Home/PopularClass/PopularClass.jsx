import { useContext, useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import './PopularClass.css'
import axios from 'axios';
import PopularClassCard from './PopularClassCard';
import { DarkModeContext } from '../../../contexts/DarkMode';

const PopularClass = () => {
    const { darkMode } = useContext(DarkModeContext)
    const [loading, setLoading] = useState(true)

    const [popularClass, setPopularClass] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_API}/topclasses`)
            .then(res => {
                setPopularClass(res.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className='mt-24 text-center text-red-500 text-4xl'><span className="loading loading-bars loading-lg"></span></div>
    }

    return (
        <div>
            <SectionHeading title={`Popular Classes`} />
            <div className={`px-2 md:px-12 py-8 pt-5 ${darkMode ? 'darkMood darkText' : 'lightMood'}`}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        popularClass.slice(0, 6).map(popular => <PopularClassCard
                            key={popular._id}
                            popular={popular}
                            darkMode={darkMode}
                        />)
                    }
                </div>
            </div>
        </div>
    );
}

export default PopularClass;
