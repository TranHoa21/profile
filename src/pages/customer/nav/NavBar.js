import React, { useState } from "react";
import "../../../style/nav/style.scss";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed); // Đảo trạng thái collapse
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {/* Logo */}
                <NavLink className="navbar-brand" to="/customer/home">
                    <em>Tran Hoa</em>
                </NavLink>

                {/* Toggle Button for Mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleToggle}
                    aria-expanded={isCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div
                    className={`collapse navbar-collapse ${isCollapsed ? "show" : ""}`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink
                                className={`nav-link ${pathname === "/customer/" ? "active" : ""}`}
                                to="/customer/home"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={`nav-link ${pathname === "/customer/product" ? "active" : ""
                                    }`}
                                to="/customer/product"
                            >
                                Product
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={`nav-link ${pathname === "/customer/pricing" ? "active" : ""
                                    }`}
                                to="/customer/pricing"
                            >
                                Pricing
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={`nav-link ${pathname === "/customer/blog" ? "active" : ""}`}
                                to="/customer/blog"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={`nav-link ${pathname === "/customer/contact" ? "active" : ""
                                    }`}
                                to="/customer/contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    {/* Let's Talk */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className={`nav-link ${pathname === "/Let-Talk" ? "active" : ""
                                    }`}
                                to="/login"
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
