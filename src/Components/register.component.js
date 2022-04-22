import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register(props) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleFullNameChange = e => {
        setFullName(e.target.value);
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match");
            return;
        } else {
            if (!(fullName && email && password && confirmPassword)) {
                alert("Please fill in all fields");
                return;
            }
        }
        const data = {
            name: fullName,
            email: email,
            password: password
        };
        axios.post("/rst/api/register", data).then(
            res => {
                alert("Successfully registered!");
                navigate("/rst/login");
            }
        ).catch(
            err => {
                console.log(err);
                alert("Error registering!");
            }
        );
            

    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-title">Register</div>
            <div className="form-body">
                <input className="form-input" type="text" name="fullname" placeholder="Full Name"
                    onChange={handleFullNameChange}/>
                <input className="form-input" type="text" name="email" placeholder="E-mail"
                    onChange={handleEmailChange}/>
                <input className="form-input" type="password" name="password" placeholder="Password" 
                    onChange={handlePasswordChange}/>
                <input className="form-input" type="password" name="c_password" placeholder="Confirm Password" 
                    onChange={handleConfirmPasswordChange}/>
                <button className="form-button">Register</button>
            </div>
            <div className="form-footer">
                <div>
                    Already have an account? <Link className="form-ft-button" to="/rst/login">Login</Link>
                </div>
                <div>
                    Forgot your password? <Link className="form-ft-button" to="/rst/forgot">Retrieve Password</Link>
                </div>
            </div>
        </form>
    )
}