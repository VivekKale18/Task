import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import "../../styles/login.css";



const LoginForm = () => {
    const navigate = useNavigate();
    const initialValues={
        username:"",
        password:"",
    };
    const [formData,setFormData] = useState(initialValues);
    const [errors,setErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const{name,value}=e.target;
        setFormData({...formData,[name]:value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(formData));
        setIsSubmit(true);
    };
    useEffect(() => {
        if(Object.keys(formData).length === 0 && isSubmit){
            console.log(formData);
        }
    },[errors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
        if(!values.username){
            errors.username = "username is requried";
        }
        else if(!regex.test(values.username)){
            errors.username = "Enter the valid email format";
        }
        if(!values.password){
            errors.password="Password is requried";
        }else if(values.password.length<6){
            errors.password="Password must be more than 6";
        }else if(values.password.length >10){
            errors.password= "Password must ne greater than 10";
        }
        return errors;
    };

    return (
        <>
        <div className="login">
            <h2 className="text-center h3 mb-2 nx-1 nx-md-4 mt-2">Log In</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">
                        Username
                    </label>
                    <input type="email"
                    placeholder="username"
                    className="form-control"
                    value={formData.username}
                    name="username"
                    onChange={handleChange}>
                    </input>
                </div>
                <p>{errors.username}</p>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">
                        Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    placeholder="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}>
                    </input>
                </div>
                <p>{errors.password}</p>
                <div className="row">
                    <div className="col-md-6">
                        <button type="button" onClick={handleSubmit} className="btn btn-primary btn-block w-100">
                            Log In
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button
                        className="btn btn-primary w-100"
                        onClick={()=>{
                            navigate("/signup");
                        }}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div> 
        </> 
    );
};

export default LoginForm;