import React, { PureComponent } from 'react';
import Navbar from '../containers/navbar/navbar.jsx';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.getNav = (element) => {
      this.navElement = element;
      return true;
    };
    this.getBurger = (element) => {
      this.BurgerElement = element;
      return true;
    };
  }

  componentDidMount() {
    this.BurgerElement.addEventListener('click', this.toggleNavbar, false);
  }

  componentWillUnmount() {
    this.BurgerElement.removeEventListener('click', this.toggleNavbar, false);
  }

  toggleNavbar = () => {
    this.navElement.classList.toggle('is-active');
  }

  render() {
    return (
      <Navbar burgerRef={this.getBurger} navRef={this.getNav} isLoggedIn />
    );
  }
}
export default HomePage;
