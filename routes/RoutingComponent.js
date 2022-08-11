import React from "react";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import {Routes,Route} from 'react-router-dom';



const RoutingComponent = () => {
    return(
        
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route  path="/signup" element={<SignUp/>}/>
            <Route  path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        
    );
};

export default RoutingComponent;