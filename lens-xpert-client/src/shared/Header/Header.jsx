import { Link } from "react-router-dom";
import cartImg from "../../assets/images/trolley.png"

const Header = () => {
    const navlink = <>
         <li><Link to="/">Home</Link></li>
         <li><a>Courses</a></li>
         <li><a>Dashboard</a></li>
         <li><Link>
            <div className="relative flex justify-center items-center gap-2">
                <img src={cartImg} width={20} alt="" />
                <span className="absolute left-3 bottom-1 font-bold text-lg ">2</span>
            </div>
         </Link></li>
    </>
    return (
        <div className="md:px-12 navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {navlink}
                    </ul>
                </div>
                <h3 className="normal-case text-xl">LensXpert</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
}

export default Header;
