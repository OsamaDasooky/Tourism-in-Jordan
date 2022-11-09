import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ token, logout }) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    Jordan Tourism
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        {token != null ? (
                            <>
                                <li className="nav-item">
                                    <NavLink
                                        to="/useEffect"
                                        className="nav-link"
                                    >
                                        useEffect
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/useEffect/task"
                                        className="nav-link"
                                    >
                                        useEffect task
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/api" className="nav-link">
                                        api
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/weather" className="nav-link">
                                        weather
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/laravel" className="nav-link">
                                        Laravel
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            ""
                        )}
                        {token == null ? (
                            <li className="nav-item">
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link">
                                        login
                                    </NavLink>
                                </li>
                            </li>
                        ) : (
                            ""
                        )}
                    </ul>
                </div>
                <div>
                    {token != null ? (
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                logout();
                            }}
                        >
                            logout
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
