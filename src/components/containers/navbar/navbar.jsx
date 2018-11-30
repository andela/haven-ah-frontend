import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import CommonNavItems from './commonNavItems.jsx';
import UserNavItems from './userNavItems.jsx';
import GuestNavItems from './guestNavItems.jsx';
import './navbar.scss';

const NavBar = React.memo(({ burgerRef, navRef, isLoggedIn }) => {
  return (
    <nav className="nav navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
              Authors<span className="ah-orange">Haven</span>
            <img src="" width=" 112" height="28" />
          </Link>
          <div
            className="navbar-burger burger"
            data-target="ahNavbar"
            ref={burgerRef}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="ahNavbar" className="navbar-menu" ref={navRef}>
          <CommonNavItems />
          {isLoggedIn ? <UserNavItems /> : <GuestNavItems/>}
        </div>
      </div>
    </nav>
  );
});

NavBar.propTypes = {
  isLoggedIn: propTypes.bool.isRequired,
  navRef: propTypes.func.isRequired,
  burgerRef: propTypes.func.isRequired
};

export default NavBar;
