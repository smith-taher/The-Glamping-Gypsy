import React from 'react';
import TopBar from '../topBar';

const Layout = ({ children }) => (
    <div className="content-box">
        <TopBar/>
        {children}
    </div>
)

export default Layout;