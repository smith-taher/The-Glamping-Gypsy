import React from 'react';

const TopBar = () => (
    <ul className="bar">
        <li><a href="#home">
            Home</a>
        </li>
        <li><a href="#campsites">
            Campsites</a>
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
        <li className='itemButton'>
            <button
                className='btn btn-primary'
            >
                Book Now!
            </button>
        </li>
    </ul>
)

export default TopBar;