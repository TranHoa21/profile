import React from "react";
import "../../style/nav/style.scss";
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <div className="nav-container">
            <div className="nav-menu">
                <div className="logo"><em>Tran Hoa</em></div>
            </div>
            <div className=" nav-menu">
                <NavLink className={`nav-link  ${pathname === '/' ? 'active' : ''}`} to="/">Home</NavLink>
                <NavLink className={`nav-link  ${pathname === '/product' ? 'active' : ''}`} to="/product">Product</NavLink>
                <NavLink className={`nav-link  ${pathname === '/pricing' ? 'active' : ''}`} to="/pricing">Pricing</NavLink>
                <NavLink className={`nav-link  ${pathname === '/blog' ? 'active' : ''}`} to="/blog">Blog</NavLink>
                <NavLink className={`nav-link  ${pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</NavLink>
            </div>
            <div className=" nav-menu">
                <NavLink className={`nav-link  ${pathname === '/Let-Talk' ? 'active' : ''}`} to="/Let-Talk">Let's Talk</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
