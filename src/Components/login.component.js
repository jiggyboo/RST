import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!(email && password)) {
            alert("Please fill in all fields");
            return;
        };
        const data = {
            email: email,
            password: password
        };
        
        axios.post("/rst/api/login", data).then(
            res => {
                console.log(res);
                if (res.data.token) {
                    sessionStorage.setItem("token", res.data.token);
                    props.login();
                    let ticker_list = [];
                    for (let i = 0; i < res.data.follow_list.length; i++) {
                        ticker_list.push(res.data.follow_list[i].ticker);
                    }
                    props.setFollowing(ticker_list);
                    navigate("/rst");
                }
            }
        ).catch(
            err => {
                console.log(err);
                alert("Error logging in!");
            })
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-title">Login</div>
            <div className="form-body">
                <input className="form-input" type="email" name="email" placeholder="E-mail" onChange={handleEmailChange}/>
                <input className="form-input" type="password" name="password" placeholder="Password" onChange={handlePasswordChange} />
                <button className="form-button">Login</button>
            </div>
            <div className="form-footer">
                <div>
                    Don't have an account? <Link className="form-ft-button" to="/rst/register">Register!</Link>
                </div>
                <div>
                    Forgot your password? <Link className="form-ft-button" to="/rst/forgot">Retrieve Password</Link>
                </div>
            </div>
        </form>
    )
}