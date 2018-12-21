import React from 'react';
import { Link } from 'react-router-dom';

const navBarItems = [
  'Technology',
  'Politics',
  'Science',
  'Economy',
  'Religion',
  'Elements',
  'Opinions'
];

/**
 * Functional react component
 * @returns common nav items
 */
const CommonNavItems = () => {
  return (
    <div className="navbar-start">
      <Link className="navbar-item" to="/">
        Home
      </Link>
      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link" to="#">
          Tags
        </Link>
        <div className="navbar-dropdown is-boxed">
          {navBarItems.map((item, index) => {
            return (
              <Link key={index} className="navbar-item" to="#">
                {item}
              </Link>
            );
          })}
        </div>
      </div>
      <Link className="navbar-item" to="#">
      Top Stories
      </Link>
      <Link className="navbar-item fa fa-search fonticons-20 icon-search"
        to="search-article"/>
    </div>
  );
};

export default CommonNavItems;
