import React from 'react';
import './header.css';
// import {   NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className = "list-group header">
            {/* <NavLink  to="/add">Create NOTE</NavLink> */}
            {/* <NavLink to="/note">Note list</NavLink> */}
            <a href="/add"><button className="btn btn-outline-success ">Create NOTE</button></a>
            <a class="alert-link" href="/note"><button className="btn btn-outline-success ">Show all notes</button></a>
        </div>
    )
}
export default Header