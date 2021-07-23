import React from "react";
import Navbar from "./Navbar";
import portfolio from "./portfolio-2.jpg";
import "./App.css"
import { NavLink } from "react-router-dom";

const Skills = () => {
    return (
        <>
            <Navbar />
            <section id="header">
                <div className="left-side">
                    <h1>skills : - </h1>
                    <hr />
                    <ul>
                        <li>C Language</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>HTML,CSS,Javascript</li>
                        <li>React js</li>
                        <li>Data Structure and Algorithms</li>
                    </ul>
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

export default Skills;