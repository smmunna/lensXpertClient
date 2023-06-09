import { useContext } from "react";
import { DarkModeContext } from "../../../contexts/DarkMode";

const PopularInstructorCard = ({instructors}) => {
    const{darkMode}=useContext(DarkModeContext)
    const{name,email,image}=instructors
    return (
        <div className={`border-4  ${darkMode ?'border-b-slate-200':'border-b-black'} p-4 shadow-lg`}>
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src={image} />
                </div>
            </div>
            <div>
                <h3><span className="font-bold mr-2">Name:</span>{name} </h3>
                <h3><span className="font-bold mr-2">Email:</span>{email} </h3>
            </div>
        </div>
    );
}

export default PopularInstructorCard;
