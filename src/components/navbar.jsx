import { Link, useLocation } from "react-router-dom";

export let Navbar = () => {
    const location = useLocation();

    return (
        <nav className="d-flex flex-wrap justify-content-center mb-4 border-bottom w-100 pb-2">
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4">Simple Website</span>
            </Link>
            <ul className="nav nav-pills">
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
        </nav>
    );
};
