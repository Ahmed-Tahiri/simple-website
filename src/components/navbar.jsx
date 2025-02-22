import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";



export let Navbar = () => {
    const location = useLocation();
    let [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-between navbar-light mb-4 border-bottom w-100 pb-2">
            <a className="navbar-brand" href="/">Simple Website</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className={`nav-link ${location.pathname === "/services" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                            Contact Us
                        </Link>
                    </li>

                </ul>

            </div>
        </nav>

    );
};


<nav className="d-flex flex-wrap justify-content-between mb-4 border-bottom w-100 pb-2">
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4">Simple Website</span>
    </Link>
    <ul className="nav navUl nav-pills">
        <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                Home
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/services" className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}>
                Services
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>
                About
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>
                Contact Us
            </Link>
        </li>
    </ul>
    <button id="hamburgerBtn" type="button" className="hamburgerBtn displayNone justify-content-center align-items-center bg-primary text-light"><GiHamburgerMenu /></button>
</nav>