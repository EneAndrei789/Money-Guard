import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

    console.log("Login component loaded") // This will log when the component is loaded

    const  navigate = useNavigate();

    const openHomeSection = () => {
        console.log("Login button clicked") // This will log when the button is clicked
        navigate("/homeSection"); // Navigate to the HomeSection component
    }

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
                        type="email"
                        id="Email"
                        name="Email"
                        placeholder="Email"
                        required
                        style={{ marginBottom: "10px", background: "transparent" }}/>
                    <br/>
                    <label htmlFor="Password"></label>
                    <input
                        className="LoginPasswordInput LoginInput"
                        type="password"
                        id="Password"
                        name="Password"
                        placeholder="Password"
                        style={{ marginBottom: "10px", background: "transparent" }}/>
                    <br/>
                    <div
                        className="LoginButtons"
                        style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
                        <button type="button" className="LoginButtonSection" onClick={openHomeSection}
                            style={{
                                marginTop: "50px",
                                marginBottom: "10px",
                                height: "50px",
                                borderRadius: "10px",
                                width: "250px",
                                background: 'linear-gradient(90deg, #FFC727, #9E40BA, #7000FF)',
                                border: "none",
                                color: "white",
                                fontWeight: "400",
                                fontFamily: "Poppins",
                                fontSize: "20px",}}>
                            Login
                        </button>
                        <button className="LoginButtonSection"
                            style={{
                                height: "50px",
                                width: "250px",
                                borderRadius: "10px",
                                border: "none",
                                color: "black",
                                fontWeight: "400",
                                fontFamily: "Poppins",
                                fontSize: "20px",}}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;