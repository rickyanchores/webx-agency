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
      <ul className="navlinks flex flex-col md:flex-row">
        {navList.map((link) => (
          <li key={link.name} className="link justify-between ml-5 text-lg">
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
