import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Banner from '../components/Banner';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;