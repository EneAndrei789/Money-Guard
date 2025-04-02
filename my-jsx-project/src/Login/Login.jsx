import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="loginSection">
            <div className="LoginForm">
                <form action="">
                    <label htmlFor="Email"></label>
                    <input className="LoginEmailInput LoginInput" type="text" id="LoginFormEmail" name="Email" placeholder="Email" style={{ marginBottom: "10px" }} /> <br />
                    <label htmlFor="Password"></label>
                    <input className="LoginPasswordInput LoginInput" type="text" id="LoginFormPassword" name="Password" placeholder="Password" style={{ marginBottom: "10px" }} /> <br />
                </form>
            </div>
        </div>
    );
};

export default Login;