import React from 'react'
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
   return (
      <>
      <nav className='red darken-4'>
         <div className="nav-wrapper container">
            <a href='#!' className="brand-logo center">Todo App</a>
            <a href='#' data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
               <li><NavLink to="/">Todo List</NavLink></li>
               <li><NavLink to="/about">Information</NavLink></li>
            </ul>
         </div>
      </nav>
         <ul className="sidenav" id="mobile-demo">
            <li><NavLink to="/">Todo List</NavLink></li>
            <li><NavLink to="/about">Information</NavLink></li>
         </ul>
      </>
   )
}
