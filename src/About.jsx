import React from "react";
import Navbar from "./Navbar";
import portfolio from "./portfolio-2.jpg";
import "./App.css"
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <>
            <Navbar />
            <section id="header">
                <div className="left-side" style={{ width:"50%" }}>
                    <h1>about : -</h1>
                    <hr />
                    <p>i am pursuing btech in computer science from student of gl bajaj institute of technology and management.
                         currently i am in seccond year. i have the knowledge of web development. i am also a 
                         competitive programmer and actively participate in codefroces and codechef contests. i am always curious 
                         to learn new technologies. i also love to play cricket. </p>
                    <div className="btn">
                        <NavLink className="hire-me-btn" to="/">hire me</NavLink>
                        <NavLink to="/contact">contact me</NavLink>
                    </div>
                </div>
                <div className="right-side">
                    <img src={portfolio} style={{ width: "600px", height: "400px" }} alt="Myimage" />
                </div>
            </section>
        </>
    )
};

export default About;