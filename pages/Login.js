import React from "react";
import LoginForm from "../components/User/LoginForm";

const Login=()=>{
    return (
        <>
        <div className="row justify-content-center mt-5">
            <div className="col-4">
                <div className="card p-5">
                    <LoginForm></LoginForm>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;