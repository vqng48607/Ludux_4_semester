import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div class="parent">
      <div class="child">
        <ul>
          <h1>Home</h1>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
          <p>
            <Link to="/joboptions">Joboptions</Link>
          </p>
          <p>
            <Link to="/profile">Profile</Link>
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
