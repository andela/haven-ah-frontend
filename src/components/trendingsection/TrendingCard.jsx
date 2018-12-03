import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../public/images/empty.jpeg';
import timeFormatter from '../../helpers/timeFormatter.jsx';

const { log } = console;

const TrendingCard = (props) => {
  const {
    readtime, title, description, images
  } = props;
  log('The images: ', images);
  return (
    <div className="column">
      <div className="ah-card">
        <div className="ah-card__image"
          style={{ backgroundImage: `url(${images[0] || defaultImage})` }} />
        <div className="ah-card__details p-1">
          <div className="ah-card__space">
            <div className="ah-card__reaction">
              <span>
                <i className="fa fa-heart fonticons-20 icon-red" />
              </span>
            </div>
            <div className="ah-card__readtime">
              <span className="ml-1">{timeFormatter(readtime)}</span>
            </div>
          </div>
          <div className="ah-card__title">
            <h1 className="title is-5">
              {title}
            </h1>
          </div>
          <div className="ah-card__description pb--15">
            <p>
              {description.slice(0, 40)}...
            </p>
          </div>
          <div className="justify-space-between pb--5">
            <div className="ah-card__author-image">
              <img className="circular-avatar" src={defaultImage} alt="" />
            </div>
            <div className="ah-card__author-name">
              <span />
            </div>
            <div className="ah-card__bookmark">
              <span>
                <i className="fa fa-bookmark fonticons-20 icon-grey" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TrendingCard.propTypes = {
  readtime: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.array
};
export default TrendingCard;
