import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DarkModeContext } from '../contexts/DarkMode';

const Dashboard = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div className={`drawer lg:drawer-open pt-16 ${darkMode ? 'darkMood darkText' : 'lightMood'}`}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Page content here */}
                <h1 className='text-center text-3xl py-4'>Your Dashboard</h1>
                <hr />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                <Outlet/>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className={`menu p-4 w-80 h-full  text-base-content ${darkMode ? 'bg-slate-700 darkText' : 'bg-base-200 lightMood'}`}>
                    {/* Sidebar content here for Student */}
                    <li><Link to="/dashboard/carts">My Selected Class</Link></li>
                    <li><a>Enrolled Class</a></li>
                </ul>

            </div>
        </div>
    );
}

export default Dashboard;
