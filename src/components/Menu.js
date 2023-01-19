import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import { LinkContainer } from 'react-router-bootstrap'
import { Outlet, Link } from "react-router-dom";


function Menu(){
return(
    <div>    
        <nav class="navbar navbar-expand-md navigation-bar">
            <a class="navbar-brand" href="#">NB<i class="fa-sharp fa-solid fa-heart"></i></a>
            <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbarBlog"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse text-end" id="navbar">

                <ul class="navbar-nav ml-auto w-100 justify-content-end">
                    
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <Outlet />
    </div>
);
}

export default Menu;