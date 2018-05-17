import React from 'react';
import { Link } from 'react-router';

const TopBar = () => (
    <ul className="bar sidenav">
        <li><a>
            <Link to={`/`}>
            Home
            </Link></a>
        </li>
        <li><a>
            <Link to={`/campsites`}>
            Campsites
            </Link></a>
        </li>
        <li><a>
            <Link to={`/packages`}>
            Optional Packages
            </Link></a>
        </li>
        <li><a>
            <Link to={`/gallery`}>
            Photo Gallery
            </Link></a>
        </li>
        <li><a>
            <Link to={`/faq`}>
            FAQ
            </Link></a>
        </li>
        <li><a>
            <Link to={`/contact`}>
            Contact Us
            </Link></a>
        </li>
        <li className='itemButton'>
            <button
                className='button'
            >
                Book Now!
            </button>
        </li>
    </ul>
)

export default TopBar;