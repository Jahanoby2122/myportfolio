import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Banner from '../components/Banner';
import About from '../Pages/About';
import Skills from '../Pages/Skills';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;