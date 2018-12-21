import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const SliderContent = (props) => {
  const { heroArticle, image } = props;
  return (
    <div>
      <img src={image} />
      <div className="legend text-group--featured ">
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
  );
};

SliderContent.propTypes = {
  heroArticle: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

export default SliderContent;
