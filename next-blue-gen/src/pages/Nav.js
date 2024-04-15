import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/">Nav</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/joboptions">Joboptions</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
