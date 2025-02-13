import React from 'react';

import { Outlet } from 'react-router-dom';
import HeaderDashboard from './HeaderDashboard';
import Sidebar from './Sidebar';


const MainLayout: React.FC = () => {
 
    return (
        <div className='grid grid-cols-12'>

        {/* side bar */}
        <div className='col-span-2 h-screen ' style={{ background: "linear-gradient(to bottom, #EF4136, #FBB040)" , color: "white"}}>
            <Sidebar/>
        </div>

        {/* main container with header */}
        <div className='col-span-10'>
            <div className='h-[80px] flex items-center justify-end pr-5'>
                <HeaderDashboard/>
            </div>

            <div className='bg-[#fff7ec] p-4 h-[calc(100vh-80px)]'>
                <div className='h-full overflow-y-auto rounded-md '>
                    <Outlet />
                </div>
            </div>
        </div>

    </div>
    );
};

export default MainLayout;
