import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import slack from "../img/slack_svg.svg";
import twitter from "../img/twitter_svg.svg";

import logo from "../img/valmilogo.svg";
import GitHubButton from "react-github-btn";
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
            <img src={logo} alt="valmi.io" style={{ width: "140px" }} />
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
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" target="_blank" to="https://docs.valmi.io">
              Docs
            </Link>
          </li>
          <li style={{ padding: "0px" }} className="navbar-item">
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </li>
          <li style={{ padding: "0px" }} className="navbar-item">
            <Link className="navbar-item" to="/jobs">
              Jobs
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
             href="/slack"
             target="_blank"
             rel="noopener noreferrer"
           >
             <span className="icon">
               <img src={slack} alt="Slack Community" />
             </span>
         
              </a>
              
              
 
           <a
             className="navbar-item"
             href="https://twitter.com/valmi_io"
             target="_blank"
             rel="noopener noreferrer"
           >
             <span className="icon">
               <img src={twitter} alt="Twitter" />
             </span>
         
              </a>
              
               
            <a
              className="navbar-item"
              href="https://github.com/valmi-io/valmi-activation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
          
               </a>
               <div style={{ marginTop: '1.1rem'  }} >
               <GitHubButton type="stargazers"  namespace="valmi-io"  repo="valmi-activation"  aria-label="Star valmi-io/valmi-activation on GitHub"    data-icon="octicon-star"     
  data-size="large"
  data-show-count="true"  
   href="https://github.com/valmi-io/valmi-activation">Follow @valmi.io</GitHubButton> 
  </div> 
               

          </li>
         
          
        </ul>
        
      </div>
      
    </nav>
  );
};

export default Navbar;
