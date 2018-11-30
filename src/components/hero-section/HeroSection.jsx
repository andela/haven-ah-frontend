import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.min.css';
import './HeroSection.scss';
import { heroArticleAction } from '../../actions/heroArticleAction';

class HeroSection extends Component {
  componentDidMount() {
    this.props.heroArticleAction();
  }

  render() {
    const { heroArticle } = this.props;
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="text-group--featured">
              <h1 className="
                title is-1
                has-text-white
                has-text-weight-normal
                heading-primary-main">
                {heroArticle ? heroArticle.title : 'Welcome to Authors Haven'}
              </h1>
              <p className="
                sub-header
                is-size-4
                has-text-white-ter
                heading-primary-sub">
                {heroArticle ? heroArticle.description
                  : 'A Social platform for the creative at heart.'}
              </p>
              { heroArticle
                ? <Link to={`/articles/${heroArticle.slug}`}
                  className="btn btn-white btn-animated">
                    Read More...
                </Link>
                : <Link to="/articles"
                  className="btn btn-white btn-animated">
                    Explore...
                </Link>
              }
            </div>
          </div>
          <div className="column" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heroArticle: state.heroArticle.article,
});

HeroSection.propTypes = {
  heroArticleAction: PropTypes.func.isRequired,
  heroArticle: PropTypes.object,
};

export default connect(mapStateToProps, { heroArticleAction })(HeroSection);
