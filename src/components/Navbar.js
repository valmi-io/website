import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/valmilogo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: "rgba(255, 255, 255, 0)",
      }}
      className="navbar is-white
      "
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container ">
        <div className="navbar-brand ">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Valmi.io" style={{ width: "140px" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul
          id="navMenu"
          className={` navbar-start navbar-menu ${isActive && "is-active"}`}
        >
          {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
          {/* <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
            </li>*/}
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/">
              Home
            </Link>
          </li>
          <li style={{ padding: "0px" }} className="navbar-item">
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
          {/* <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </li>*/}
          <li className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/rajVarkala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
