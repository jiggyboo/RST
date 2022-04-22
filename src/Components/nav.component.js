import React from "react";
import { Link } from "react-router-dom";

export default function Nav (props) {
    const logout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("follow_list");
        props.logout();
        alert("Successfully logged out!");
    };
    return (
        <div className="nav">
            <div className="nav-left">
                <Link className="nav-link nlr" to="/rst">Reddit Stock Tracker</Link>
            </div>
            <div className="nav-right">
                {props.login ? <Link to="/rst" className="nav-link" onClick={logout} >Logout</Link>: <Link to="/rst/login" className="nav-link">Login</Link>}
                <a className="nav-link" href="https://rud4u.xyz/">RUD</a>
                <a className="nav-link" href="https://rud4u.xyz/aboutme">About Me</a>       
            </div>
        </div>
    );
        
}