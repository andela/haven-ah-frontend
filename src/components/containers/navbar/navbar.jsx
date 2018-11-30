import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import CommonNavItems from './commonNavItems.jsx';
import UserNavItems from './userNavItems.jsx';
import GuestNavItems from './guestNavItems.jsx';
import './navbar.scss';

class NavBar extends Component {
  componentDidMount() {
    this.refs.burger.addEventListener('click', this.toggleNavbar, false);
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    this.refs.burger.removeEventListener('click', this.toggleNavbar, false);
    window.removeEventListener('scroll', this.scrollHandler);
  }

  toggleNavbar = () => {
    this.refs.navMenu.classList.toggle('is-active');
  }

  scrollHandler = (event) => {
    const { navbar } = this.refs;
    const { pageYOffset } = event.currentTarget;
    if (pageYOffset >= 100) {
      navbar.className = 'nav navbar is-fixed-top';
    } else {
      navbar.className = `nav navbar is-fixed-top 
        ${this.props.navStyle ? this.props.navStyle : null}`;
    }
  }

  render() {
    const { isLoggedIn, navStyle } = this.props;
    return (
      <nav
        className={`nav navbar is-fixed-top ${!navStyle ? null : navStyle}`}
        ref="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                Authors<span className="ah-orange">Haven</span>
              <img src="" width=" 112" height="28" />
            </Link>
            <div
              className="navbar-burger burger"
              data-target="ahNavbar"
              ref="burger">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="ahNavbar" className="navbar-menu" ref="navMenu">
            <CommonNavItems />
            {isLoggedIn ? <UserNavItems /> : <GuestNavItems/>}
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  isLoggedIn: propTypes.bool.isRequired,
  navStyle: propTypes.string,
};

export default NavBar;
