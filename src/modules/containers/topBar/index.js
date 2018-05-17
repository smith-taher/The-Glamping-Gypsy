import React from 'react';
import { Link } from 'react-router';

const TopBar = () => (
    <div className="bar">
    <ul className="sidenav">
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
            Packages
            </Link></a>
        </li>
        <li><a>
            <Link to={`/gallery`}>
            Gallery
            </Link></a>
        </li>
        <li><a>
            <Link to={`/faq`}>
            FAQ
            </Link></a>
        </li>
        <li><a>
            <Link to={`/contact`}>
            Contact
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
    </div>
)

export default TopBar;