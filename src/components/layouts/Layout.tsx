import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';

const Layout: React.FC = () => {
    return (
        <div className='font-roboto'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout;