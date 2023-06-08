import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DarkModeContext } from '../contexts/DarkMode';
import useUser from '../hooks/useUser';
import { AuthContext } from '../provider/AuthProvider';
import DashboardHome from '../pages/Dashboard/DashboardHome';

const Dashboard = () => {
    const [role, setRole] = useState('');

    const { darkMode } = useContext(DarkModeContext)
    const { user } = useContext(AuthContext)
    const [users] = useUser();
    const userRoleFind = users.find(item => item.email === user.email);
    // console.log(userRoleFind);

    useEffect(() => {
        if (userRoleFind) {
            setRole(userRoleFind.role);
        }
    }, [userRoleFind]);



    return (
        <div className={`drawer lg:drawer-open pt-16 ${darkMode ? 'darkMood darkText' : 'lightMood'}`}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Page content here */}

                <hr />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                <Outlet />


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className={`menu pt-24 p-4 w-80 h-full  text-base-content ${darkMode ? 'bg-slate-700 darkText' : 'bg-base-200 lightMood'}`}>

                    {
                        role == 'admin' &&
                        <>
                            <h3 className='text-2xl font-semibold'>Admin Pannel</h3>
                            <hr />
                            <h3 className='py-3'>Welcome, {user.displayName}. Use your power 🔥</h3>
                            <hr />
                            <li className='bg-yellow-700 mt-2 text-white'><Link to="/dashboard">Dashboard Home</Link></li>
                            <li className='bg-yellow-600 mt-2 text-white'><Link to="/dashboard/manageclass">Manage Classes</Link></li>
                            <li className='bg-yellow-700 mt-2 text-white'><Link to="/dashboard/users">Manage Users</Link></li>
                        </>
                    }

                    {
                        role == 'user' &&
                        <>
                            <h3 className='text-2xl font-semibold'>Student Pannel</h3>
                            <hr />
                            <h3 className='py-3'>Welcome, {user.displayName}. Manage your Activity ✍</h3>
                            <hr />
                            <li className='bg-yellow-600 mt-2 text-white'><Link to="/dashboard">Dashboard Home</Link></li>
                            <li className='bg-yellow-700 mt-2 text-white'><Link to="/dashboard/carts">My Selected Class</Link></li>
                            <li className='bg-yellow-600 mt-2 text-white'><a>Enrolled Class</a></li>
                        </>
                    }
                    {
                        role == 'instructor' &&
                        <>
                            <h3 className='text-2xl font-semibold'>Instructor Pannel</h3>
                            <hr />
                            <h3 className='py-3'>Welcome, {user.displayName}. Manage your Activity ✍</h3>
                            <hr />
                            <li className='bg-yellow-700 mt-2 text-white'><Link to="/dashboard">Dashboard Home</Link></li>
                            <li className='bg-yellow-600 mt-2 text-white'><Link to="/dashboard/addclass">Add Class</Link></li>
                            <li className='bg-yellow-700 mt-2 text-white'><Link to="/dashboard/myclass">My Classes</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
}

export default Dashboard;
