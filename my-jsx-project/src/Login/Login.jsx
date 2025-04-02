import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="loginSection">
            <div className="LoginForm">
                <div className="LoginHeader">
                    <h1>Money Guard</h1>
                </div>
                <form action="">
                    <label htmlFor="Email" style={{borderBottom: "10px"}}></label>
                    <input
                        className="LoginEmailInput LoginInput"
                        type="text"
                        id="Email"
                        name="Email"
                        placeholder="Email"
                        style={{ marginBottom: "10px", background: "transparent" }}/>
                    <br/>
                    <label htmlFor="Password"></label>
                    <input
                        className="LoginPasswordInput LoginInput"
                        type="text"
                        id="Password"
                        name="Password"
                        placeholder="Password"
                        style={{ marginBottom: "10px", background: "transparent" }}/>
                    <br/>
                    <div
                        className="LoginButtons"
                        style={{ display: "flex", justifyContent: "space-between" }}>
                        <button
                            style={{
                                height: "30px",
                                borderRadius: "10px",
                                width: "120px",
                            }}>
                            Login
                        </button>
                        <button
                            style={{
                                height: "30px",
                                borderRadius: "10px",
                                width: "120px",
                            }}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;