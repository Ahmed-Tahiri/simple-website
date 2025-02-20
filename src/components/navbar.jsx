export let Navbar = () => {

    return (<>
        <nav className="d-flex flex-wrap justify-content-center mb-4 border-bottom w-100 pb-2">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4">Simple Website</span>
            </a>
            <ul className="nav nav-pills">
                <li className="nav-item"><a href="/" className={`${window.location.pathname === '/' ? 'active nav-link' : 'nav-link'}`}>Home</a></li>
                <li className="nav-item"><a href="/services" className={`${window.location.pathname === '/services' ? 'active nav-link' : 'nav-link'}`}>Services</a></li>
                <li className="nav-item"><a href="/about" className={`${window.location.pathname === '/about' ? 'active nav-link' : 'nav-link'}`}>About</a></li>
                <li className="nav-item"><a href="/contact" className={`${window.location.pathname === '/contact' ? 'active nav-link' : 'nav-link'}`}>Contact Us</a></li>
            </ul>
        </nav>
    </>);
}