import React from 'react';

const TopBar = () => (
    <ul className="bar">
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
        <button className="button">Book Now!
        </button>
    </ul>
)

export default TopBar;