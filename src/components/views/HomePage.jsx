import React, { PureComponent } from 'react';
import Navbar from '../containers/navbar/navbar.jsx';
import HeroSection from '../hero-section/HeroSection.jsx';

class HomePage extends PureComponent {
  render() {
    return (
      <header className="banner">
        <Navbar navStyle="transparent" isLoggedIn/>
        <HeroSection />
      </header>
    );
  }
}
export default HomePage;
