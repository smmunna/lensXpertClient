import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DarkModeContext } from '../contexts/DarkMode';
import useUser from '../hooks/useUser';
import { AuthContext } from '../provider/AuthProvider';

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
                <h1 className='text-center text-3xl py-4'>Your Dashboard</h1>
                <hr />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                <Outlet />


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className={`menu p-4 w-80 h-full  text-base-content ${darkMode ? 'bg-slate-700 darkText' : 'bg-base-200 lightMood'}`}>

                    {
                        role == 'admin' &&
                        <>
                            <li><Link>Manage Classes</Link></li>
                            <li><Link to="/dashboard/users">Manage Users</Link></li>
                        </>
                    }

                    {
                        role == 'user' &&
                        <>
                            <li><Link to="/dashboard/carts">My Selected Class</Link></li>
                            <li><a>Enrolled Class</a></li>
                        </>
                    }
                    {
                        role == 'instructor' &&
                        <>
                            <li><Link to="/dashboard/addclass">Add Class</Link></li>
                            <li><Link to="/dashboard/myclass">My Classes</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
}

export default Dashboard;
