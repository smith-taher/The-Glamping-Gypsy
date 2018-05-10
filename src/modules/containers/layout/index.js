import React from 'react';
import TopBar from '../topBar';
import BottomBar from '../bottomBar';

const Layout = ({ children }) => (
    <div className="content-box">
        <TopBar/>
            <div className="main-div">
            {children}
            </div>
        <BottomBar/>
    </div>
)

export default Layout;