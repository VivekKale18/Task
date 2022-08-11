import React from "react";
import {useNavigate} from "react-router-dom";
import '../styles/sidenav.css';

function Sidenav(){
    const navigate=useNavigate()

    return (
        <>
        <div>
            <ul className="ul">
                <li onClick={()=>{navigate('/?')}}>LogOut</li>
            </ul>
        </div>
        </>
    )
}
export default Sidenav