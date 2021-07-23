import React from "react";
import Navbar from "./Navbar";
import portfolio from "./portfolio-2.jpg";
import "./App.css"

const Contact = () => {
    return (
        <>
            <Navbar />
            <section id="header">
                <div className="left-side">
                    <h1 id="greeting">hello</h1>
                    <hr />
                    <h1>Contact Details : </h1>
                    <div className="btn">
                        <a  href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="https://in.linkedin.com/" rel="noreferrer" target="_blank">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com/?lang=en" rel="noreferrer" target="_blank">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://github.com/"  rel="noreferrer" target="_blank">
                            <i className="fa fa-github"></i>
                        </a>
                    </div>
                    <h3>Phone : XXXXXXXX</h3>
                    <h3>Email us at : ABC@gmail.com</h3>
                </div>
                <div className="right-side">
                    <img src={ portfolio } style={{width:"600px",height:"400px"}} alt="Myimage" />
                </div>
            </section>
        </>
    )
};

export default Contact;