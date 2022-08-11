import React from "react";

import '../styles/sidebar.css';
import Sidenav from './Sidenav';

const Sidebar = () => {
    return (
        <>
        <div className="w-25 sidebar rounded">
            <Sidenav></Sidenav>
            </div>
            </>
    );
}

export default Sidebar;