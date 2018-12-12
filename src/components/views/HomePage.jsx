import React, { PureComponent } from 'react';
import HeroSection from '../containers/hero-section/HeroSection';
import Navbar from '../containers/navbar/navbar';
import RecentArticles from '../containers/recentArticles/RecentArticles';
import FeaturedAuthor from '../containers/featuredAuthor/FeaturedAuthor';
import TrendingSection from '../trendingsection/TrendingSection';
import getAndSetUrlToken from '../../utilities/urlTokenHandler';

class HomePage extends PureComponent {
  componentDidMount() {
    const { href } = window.location;
    getAndSetUrlToken(href);
  }

  render() {
    let isLoggedIn;
    const token = localStorage.getItem('token');
    if (token) {
      isLoggedIn = true;
    } else {
      isLoggedIn = false;
    }

    return (
      <div className="layout">
        <header className="banner">
          <Navbar navStyle="transparent" isLoggedIn={isLoggedIn} />
          <HeroSection />
        </header>
        <TrendingSection />
        <FeaturedAuthor />
        <RecentArticles />
      </div>
    );
  }
}
export default HomePage;
