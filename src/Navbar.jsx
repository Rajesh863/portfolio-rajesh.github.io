import React from "react"
import { NavLink } from "react-router-dom";
import "./App.css"

 const Navbar = () =>{
     return(
         <>
         <div className="navigation-bar">
             <div className="logo">
             <NavLink to="/">portfolio</NavLink>
             </div>
             <div className="navbar">
                 <NavLink activeClassName="active-menu" className="active" to="/">home</NavLink>
                 <NavLink  activeClassName="active-menu" to="/about">about</NavLink>
                 <NavLink  activeClassName="active-menu" to="/skills">service</NavLink>
                 <NavLink activeClassName="active-menu" to="/contact">contact</NavLink>
             </div>
         </div>
         </>
     );
 }

 export default Navbar;