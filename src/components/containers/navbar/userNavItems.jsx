import React from 'react';
import { Link } from 'react-router-dom';
import { getUsername } from '../../../utilities/auth';

const userNavOptions = [
  'Settings',
  'Logout'
];
/**
 * Functional react component
 * @returns nav items for a signed user
 */
const UserNavItems = () => {
  return (
    <div className="navbar-end">
      <Link className="navbar-item" to="#">
        <i className="fa fa-bell" />
      </Link>
      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link" to="#">
          <i className="fa fa-user-circle" />
        </Link>
        <div className="navbar-dropdown is-boxed">
          <Link className="navbar-item" to={`/users/${getUsername()}/profile`}>
            Profile
          </Link>
          {userNavOptions.map((item, index) => {
            return (
              <Link key={index} className="navbar-item" to={`/${item.toLowerCase()}`}>
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserNavItems;
