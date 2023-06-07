import React, { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkMode';

const SectionHeading = ({ title }) => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div>
            <div>
                <h3 className={`text-3xl py-4 text-center font-semibold ${darkMode ? 'darkMood darkText' : 'lightMood'}`}>{title}</h3>
                <hr />
            </div>
        </div>
    );
}

export default SectionHeading;
