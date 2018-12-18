import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import defaultImage from '../../../public/images/empty.jpeg';
import timeFormatter from '../../helpers/timeFormatter';
import BookmarkArticle from '../containers/bookmarkArticle/bookmarkArticle';

const TrendingCard = (article) => {
  const {
    readtime, title, description, images, slug,
    authorImage, authorName
  } = article;
  return (
    <div className="column">
      <div className="ah-card">
        <div className="ah-card__image"
          style={{
            backgroundImage:
          `url(${(images && images[0]) || defaultImage})`
          }}/>
        <div className="ah-card__details p-1">
          <div className="ah-card__space">
            <div className="ah-card__readtime">
              <span className="ml-1">{timeFormatter(readtime)}</span>
            </div>
          </div>
          <div className="ah-card__title">
            <h1 className="title is-5">
              <Link to={`articles/${slug}`}>{title}</Link>
            </h1>
          </div>
          <div className="ah-card__description pb--15">
            <p>
              {description.slice(0, 32)}...
            </p>
          </div>
          <div className="justify-space-between pb--5">
            <div className="ah-card__author-image">
              <img className="circular-avatar" style={{
                backgroundImage:
          `url(${authorImage || defaultImage})`
              }} alt="" />
            </div>
            <div className="ah-card__author-name">
              <span>{authorName}</span>
            </div>
            <BookmarkArticle article={article} />
          </div>
        </div>
      </div>
    </div>
  );
};

TrendingCard.propTypes = {
  readtime: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.array,
  authorImage: PropTypes.string,
  authorName: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

TrendingCard.defaultProps = {
  images: defaultImage,
  authorImage: PropTypes.string,
  authorName: PropTypes.string,
};


export default TrendingCard;
