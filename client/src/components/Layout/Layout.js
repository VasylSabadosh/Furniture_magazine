import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNav from '../HeaderNav/HeaderNav.js';

const Layout = () => {
    return (
        <>
            <HeaderNav />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default Layout;