import { createContext, useState } from "react";

export const DarkModeContext = createContext(null);

const DarkMode = ({children}) => {
    const[darkMode,setDarkMode] = useState(false)

    const darkInfo = {
        darkMode,
        setDarkMode,
    }
    return (
        <DarkModeContext.Provider value={darkInfo}>
            {children}
        </DarkModeContext.Provider>
    );
}

export default DarkMode;
