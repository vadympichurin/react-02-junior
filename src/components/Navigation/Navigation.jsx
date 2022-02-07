import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            className="NavLink"
            activeClassName="ActiveNavlink"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/authors"
            className="NavLink"
            activeClassName="ActiveNavlink"
          >
            Authors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className="NavLink"
            activeClassName="ActiveNavlink"
          >
            Books
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
