import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarItems">
        <ul>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#media">
            <li>Media</li>
          </a>
          <a href="#services">
            <li>Services</li>
          </a>
          <a href="#blog">
            <li>Blog</li>
          </a>
          <a href="#shop">
            <li>Shop</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
