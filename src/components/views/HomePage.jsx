import React, { PureComponent } from 'react';
import HeroSection from '../hero-section/HeroSection';
import Navbar from '../containers/navbar/navbar';
import RecentArticles from '../containers/recentArticles/RecentArticles';
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
        <RecentArticles />
      </div>
    );
  }
}
export default HomePage;
