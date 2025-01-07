import React from 'react';
import {Link} from 'react-scroll'


const Navbar = () => {
    return (
        <div className="flex flex-col items-center bg-white border-b border-darkest/10 drop-shadow-sm">
            <nav className="flex flex-row w-full justify-between items-center max-w-screen-2xl">
            <div className="navbar-logo">
                <Link to="/">Colorful Blobs</Link>
            </div>
            <ul className="flex flex-row gap-8 items-center justify-between w-1/3 px-6 py-6">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        </div>
        
    );
};

export default Navbar;