import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route from react-router-dom
import Login from './Login/Login';
import Register from "./Register/Register";
import HomeSection from "./HomeSection/HomeSection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>

      
      <Routes>
        {/* Define the route for the login page */}
        <Route path="/" element={<Login />} />
        
        {/* Define the route for the register page */}
        <Route path="/registerSection" element={<Register />} />
        
        {/* Define the route for the home section */}
        <Route path="/homeSection" element={<HomeSection />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

