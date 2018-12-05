import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Functional react component
 * @returns nav items for a guest
 */
const GuestNavItems = () => {
  return (
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <Link to="signup" className="button is-medium is-rounded">
              <span>
                Sign Up
              </span>
            </Link>
          </p>
          <p className="control">
            <Link to="/login" className="button is-medium is-orange is-rounded">
              <span>Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuestNavItems;
