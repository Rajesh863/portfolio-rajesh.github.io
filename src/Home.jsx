import React from "react";
import Navbar from "./Navbar";
import portfolio from "./portfolio-2.jpg";
import "./App.css"
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Navbar />
            <section id="header">
                <div className="left-side">
                    <h1 id="greeting">hello</h1>
                    <hr />
                    <h1>i am rajesh </h1>
                    <p><strong>From : </strong>greater noida</p>
                    <p>web developer and programmer</p>
                    <p STYLE={{ width:"80%"}}><strong>study at : </strong>GL BAJAJ INSTITUTE OF TECHNOLOGY AND MANAGEMENT</p>
                    <div className="btn">
                        <NavLink className="hire-me-btn" to="/">hire me</NavLink>
                        <NavLink to="/contact">contact me</NavLink>
                    </div>
                </div>
                <div className="right-side">
                    <img src={ portfolio } style={{width:"600px",height:"400px"}} alt="Myimage" />
                </div>
            </section>
        </>
    )
};

export default Home;