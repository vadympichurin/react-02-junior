import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from "../../routes";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={routes.home}
            exact
            className="NavLink"
            activeClassName="ActiveNavlink"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.authors}
            className="NavLink"
            activeClassName="ActiveNavlink"
          >
            Authors
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.books}
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
