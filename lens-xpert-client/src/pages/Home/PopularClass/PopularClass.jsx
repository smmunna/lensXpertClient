import { useContext, useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import './PopularClass.css'
import axios from 'axios';
import PopularClassCard from './PopularClassCard';
import { DarkModeContext } from '../../../contexts/DarkMode';

const PopularClass = () => {
    const{darkMode}=useContext(DarkModeContext)

    const [popularClass, setPopularClass] = useState([])
    useEffect(() => {
        axios.get('popularclass.json')
            .then(res => setPopularClass(res.data))
    }, [])
    return (
        <div>
            <SectionHeading title={`Popular Classes`} />
            <div  className={`px-2 md:px-12 py-8 pt-5 ${darkMode ? 'darkMood darkText' : ''}`}>
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
