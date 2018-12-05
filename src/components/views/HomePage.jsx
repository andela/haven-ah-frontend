import React, { PureComponent } from 'react';
import HeroSection from '../hero-section/HeroSection';
import Navbar from '../containers/navbar/navbar';
import FeaturedAuthor from '../containers/featuredAuthor/FeaturedAuthor';
import TrendingSection from '../trendingsection/TrendingSection';

class HomePage extends PureComponent {
  render() {
    return (
      <div className="layout">
        <header className="banner">
          <Navbar navStyle="transparent" isLoggedIn />
          <HeroSection />
        </header>
        <TrendingSection />
        <FeaturedAuthor />
      </div>
    );
  }
}
export default HomePage;
