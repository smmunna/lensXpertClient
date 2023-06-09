import React from 'react';
import { Helmet } from "react-helmet";

const DashboardHome = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard | LensXpert</title>
            </Helmet>
            <h3 className='text-3xl text-center pt-5'>Welcome to the Dashboard. Manage your activity..</h3>
        </div>
    );
}

export default DashboardHome;
