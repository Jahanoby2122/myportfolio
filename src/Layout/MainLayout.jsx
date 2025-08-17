import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Banner from '../components/Banner';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Projects';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default MainLayout;