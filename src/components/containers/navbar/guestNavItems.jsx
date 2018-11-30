import React from 'react';
import { Link } from 'react-router-dom';

const guestNavOptions = [
  'Log In',
  'Sign Up'
];

/**
 * Functional react component
 * @returns nav items for a guest
 */
const GuestNavItems = () => {
  return (
    <div className="navbar-end">
      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link" to="#">
          <i className="fa fa-user-circle" />
        </Link>
        <div className="navbar-dropdown is-boxed">
          {guestNavOptions.map((item, index) => {
            return (
              <Link key={index} className="navbar-item" to="#">
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GuestNavItems;
