import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Helmet } from "react-helmet";
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';

const DashboardHome = () => {
    const { user } = useContext(AuthContext)

    // Getting this from Firebase;
    const value = user.metadata.createdAt;
    const referenceValue = 10000000000000;
    const percentage = (value / referenceValue) * 100;


    const [totalClass, setTotalClass] = useState('')
    const [totalStudents, setTotalStudents] = useState('')
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_API}/totalProducts`)
            .then(res => {
                setTotalClass(res.data);
            })

        // Total students
        axios.get(`${import.meta.env.VITE_SERVER_API}/totalStudents`)
            .then(res => {
                setTotalStudents(res.data);
            })

    }, [])
    return (
        <div className='mb-12'>
            <Helmet>
                <title>Dashboard | LensXpert</title>
            </Helmet>
            <h3 className='text-3xl text-center py-5'>Welcome to the Dashboard. Manage your activity..</h3>
            <hr />
            {/* Stylish Dashboard */}

            <div className='flex justify-center items-center my-5'>
                <div className=" md:stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title text-slate-600">Total Students</div>
                        <div className="stat-value text-primary">{totalStudents.totalStudents}</div>
                        <div className="stat-desc text-slate-600">Student is increasing..</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title text-slate-600">Total Class</div>
                        <div className="stat-value text-secondary">{totalClass.totalProducts}</div>
                        <div className="stat-desc text-slate-600">Classes are helpful.</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src={user?.photoURL} title={user?.displayName} alt='SmMunna'/>
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">{percentage.toFixed(2) + '%'}</div>
                        <div className="stat-title text-slate-600">{user?.displayName}</div>
                        <div className="stat-desc text-secondary">{user?.email}</div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default DashboardHome;
