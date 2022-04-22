import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Forgot(props) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleFullNameChange = e => {
        setFullName(e.target.value);
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!(this.fullName && this.email)) {
            alert("Please fill in all fields");
            return;
        }
        const data = {
            full_name: fullName,
            email: email
        }
        console.log(data);
        axios.post("http://localhost:8000/api/forgot", data).then(
            res => {
                alert("New password sent! Please check your email.");
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
            <div className="form-title">Forgot your password?</div>
            <div className="form-body">
                <div className="form-description">
                    We will send you an email with your new password.
                </div>
                <input className="form-input" type="text" name="fullName" placeholder="Full Name"
                    onChange={handleFullNameChange}/>
                <input className="form-input" type="text" name="email" placeholder="E-mail"
                    onChange={handleEmailChange}/>
                <button className="form-button">Send</button>
            </div>
            <div className="form-footer">
                <div>
                    Already have an account? <Link className="form-ft-button" to="/rst/login">Login</Link>
                </div>
                <div>
                    Don't have an account? <Link className="form-ft-button" to="/rst/register">Register!</Link>
                </div>
            </div>
        </form>
    )
}