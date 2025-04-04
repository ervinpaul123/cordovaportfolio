import React from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Ervin Paul Cordova </h1> {/* Your name as a heading */}
            </div>
            <ul>
                <li><Link to="home" spy={true} smooth={true} duration={300} offset={-50}>Home</Link></li>
                <li><Link to="about" spy={true} smooth={true} duration={300} offset={-50}>About</Link></li>
                <li><Link to="portfolio" spy={true} smooth={true} duration={300} offset={-50}>Portfolio</Link></li>
                <li><Link to="contact" spy={true} smooth={true} duration={300} offset={-50}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
