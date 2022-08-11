import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import "../../styles/signup.css";

const SignUpForm = () => {
    const navigate=useNavigate();
    const initialValues = {
        username: "",
        email: "",
        password: "",
        c_Password: "",
    };

    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        localStorage.setItem('UserData',JSON.stringify(formValues));
    };
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors]);

    const validate=(values)=>{
        const errors={};
        const regex=/^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
        if(!values.username){
            errors.username="username is requried";
        }
        if(!values.email){
            errors.email="email is requried";
        }else if(!regex.test(values.email)){
            errors.email="This is not a valid email format";
        }
        if(!values.password){
            errors.password="password is requried";
        }else if(values.password.length>6){
            errors.password="password must be more than 6 characters";
        }else if(values.password.length>10){
            errors.password="password cannot exceeds more than 10 characters";
        }
        if(!values.c_Password){
            errors.c_Password="password is requried";
        }else if(values.c_Password.length < 6){
            errors.password="password must be more than 6 characters";
        }else if(values.c_password.length > 10){
            errors.c_Password="password cannot exceeds more than 10 characters";
        }
            return errors;
    };

    return (
        <div className="signup">
            <div className="card main-card">
                <h3 className="text-center">SignUp</h3>
                <div>
                    <form className="mx-auto p-4" onSubmit={handleSubmit}>
                        <div className="form-group username">
                            <label className="d-flex">Username</label>
                            <input 
                            type="text"
                            name="username"
                            value={formValues.username}
                            onChange={handleChange}
                            placeholder="username"
                            className="form-control">
                            </input>
                            <p>{formErrors.username}</p>
                        </div>

                        <div className="form-group userId">
                            <label className="d-flex">Email</label>
                            <input 
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            placeholder="email"
                            className="form-control">
                            </input>
                            <p>{formErrors.email}</p>
                        </div>

                        <div className="form-group mb-3 password">
                            <label className="d-flex">Password</label>
                            <input
                            type="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                            placeholder="password"
                            className="form-control">
                            </input>
                            <p>{formErrors.password}</p>
                        </div>
                        <div className="form-group mb-3 password">
                            <label className="d-flex">Confirm Password</label>
                            <input 
                            type="password"
                            name="c_Password"
                            value={formValues.c_Password}
                            onChange={handleChange}
                            placeholder="confirm password"
                            className="form-control">
                            </input>
                            <p>{formErrors.c_Password}</p>
                        </div>
                        <div className="mt-2">
                            <button className="btn btn-primary">Submit</button>
                            <button className="btn btn-primary mx-3">SignIn</button>
                            <a onClick={()=>{navigate('/?')}} className='col-md-4 para'>Go to Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;