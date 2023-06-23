import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    const navList = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Faq",
            href: "/faq"
        }
    ];

    return (
        <div className="Nav flex justify-around rounded">
            <div className="logo">NAV</div>
            <ul className="navlinks flex">
                {navList.map((link) => (
                    <li key={link.name} className="link flex justify-between ml-5">
                        <Link to={link.href} >{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Nav;

