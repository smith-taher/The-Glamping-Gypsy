import React from 'react';

const TopBar = () => (
    <ul className="sidenav">
        {/* <li className="main-logo">
            <img src="/uploads/Logo.jpg" />
        </li> */}
        <li><a href="#home">
            Home</a>
        </li>
        <li><a href="#reservations">
            Reservations</a>
        </li>
        <li><a href="#premium">
            Premium Packages</a>
        </li>
        <li><a href="#photo">
            Photo Gallery</a>
        </li>
        <li><a href="#faq">
            FAQ</a>
        </li>
        <li><a href="#contact">
            Contact Us</a>
        </li>
    </ul>
)

export default TopBar;