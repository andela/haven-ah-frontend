import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HeroSection.scss';
import { heroArticleAction } from '../../../actions/heroArticleAction';
import SliderContent from './sliderContent';

class HeroSection extends Component {
  componentDidMount() {
    this.props.heroArticleAction();
  }

  render() {
    const { heroArticles } = this.props;
    return (
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false} >
        <div>
          <img src="../images/bg.jpg" />
          <div className="legend text-group--featured ">
            <h1 className="
                title is-1
                has-text-white
                has-text-weight-normal
                heading-primary-main">
              Welcome to Authors Haven
            </h1>
            <p className="
                sub-header
                is-size-4
                has-text-white-ter
                heading-primary-sub">
                A Social platform for the creative at heart.
            </p>
            <Link to="/articles"
              className="btn btn-white btn-animated">
              Explore...
            </Link>
          </div>
        </div>
        { heroArticles
          && heroArticles.map((heroArticle) => {
            const image = heroArticle.images
              ? heroArticle.images[0]
              : '../images/bg.jpg';
            return (
              <SliderContent
                key={heroArticle.id}
                heroArticle={heroArticle} image={image} />);
          })
        }
      </Carousel>
    );
  }
}

const mapStateToProps = state => ({
  heroArticles: state.heroArticles.articles,
});

HeroSection.propTypes = {
  heroArticleAction: PropTypes.func.isRequired,
  heroArticles: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { heroArticleAction })(HeroSection);
