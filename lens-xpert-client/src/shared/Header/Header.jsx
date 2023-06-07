import cartImg from "../../assets/images/trolley.png"
import ActiveLink from "../../components/ActiveLink/ActiveLink"
import BrandIcon from "../../assets/images/brand.png"
import DarkImg from "../../assets/images/night-mode.png"
import LightImg from "../../assets/images/light-mode.png"
import "./Header.css"
import { useContext } from "react"
import { DarkModeContext } from "../../contexts/DarkMode"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../provider/AuthProvider"

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                navigate('/')
            }).catch((error) => {
                // An error happened.
            });
    }

    const navlink = <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/instructors">Instructors</ActiveLink></li>
        <li><ActiveLink to="/classes">Classes</ActiveLink></li>
        <li><ActiveLink to="/dashboard">Dashboard</ActiveLink></li>
        <li><ActiveLink>
            <div className="relative mt-3 md:mt-0 flex justify-center items-center gap-2">
                <img src={cartImg} width={20} alt="" />
                <span className={`absolute left-3 bottom-1 font-bold text-lg ${darkMode ? 'darkText' : 'text-black'}`}>
                    <div className="badge">+99</div></span>
            </div>
        </ActiveLink></li>
        <li>
            <li>
                {
                    user ?
                        <>
                            <Link onClick={handleLogout} className="lg:hidden">Logout</Link>
                        </>
                        :
                        <>
                            <Link to="/login" className="lg:hidden">Login</Link>
                            <div className="block justify-center items-center mt-4 md:hidden">
                                <div className="avatar">
                                    <div className="w-10 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={BrandIcon} />
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </li>
        </li>
    </>
    return (
        <div className={`md:px-12 navbar fixed z-10 border-b-2 ${darkMode ? 'darkMood darkText' : 'lightMood'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className={` menu-sm dropdown-content mt-3 p-2 shadow ${darkMode ? 'darkMood darkText' : 'bg-slate-200'} rounded-box w-52 lightMood`}>
                        {navlink}
                    </ul>
                </div>
                <img src={BrandIcon} width={45} alt="LensXpert" />
                <h3 className="normal-case text-xl ml-2">LensXpert</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="space-x-2 menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="lg:flex justify-center items-center hidden md:block">
                                <div className="avatar">
                                    <div className="w-10 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                <Link onClick={handleLogout} className="btn">Logout</Link>
                            </div>
                        </>
                        :
                        <>
                            <Link to="/login" className="btn">Login</Link>
                        </>
                }
                <div className="border-2 rounded-full p-2 bg-slate-400 mx-4" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ?
                        <>
                            <img src={DarkImg} width={30} alt="" />
                        </>
                        :
                        <>
                            <img src={LightImg} width={30} alt="" />
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;
