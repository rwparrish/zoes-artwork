import React from 'react';
import { Link } from 'react-scroll'


const Navbar = () => {

    const linkStyles = "hover:underline cursor-pointer";
    return (
        <div className="flex flex-col items-center bg-white border-b border-darkest/10 drop-shadow-sm">
            <nav className="flex flex-row w-full justify-between items-center max-w-screen-2xl">
                <div className="navbar-logo">
                    <h1 className="text-2xl font-bold text-gray-800">Colorful Blobs</h1>
                </div>
                <ul className="flex flex-row gap-8 items-center justify-between w-1/3 px-6 py-6">
                    <li>
                        <Link to="/home" className={linkStyles} >Home </Link>
                    </li>
                    <li>
                        <Link to="/about" className={linkStyles} >About</Link>
                    </li>
                    <li>
                        <Link to="/gallery" className={linkStyles} >Gallery</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={linkStyles} >Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
};

export default Navbar;