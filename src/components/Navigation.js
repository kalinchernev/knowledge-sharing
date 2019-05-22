import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="">
    <ul className="">
      <li className="">
        <NavLink className="" to="/">
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink className="" to="/share">
          Share
        </NavLink>
      </li>
      <li className="">
        <NavLink className="" to="/profile">
          Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
