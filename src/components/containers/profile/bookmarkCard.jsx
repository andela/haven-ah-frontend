import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import timeFormatter from '../../../helpers/timeFormatter';
import './profile.scss';
/**
 *
 * @param {object} article
 * @returns bookmark card
 */
const BookmarkCard = ({ article }) => {
  const {
    id, title, images, description, readtime, slug
  } = article;
  return (
    <div className="column" key={id}>
      <div className="ah-recentCard">
        <div className="ah-recentCard__image" style={{
          backgroundImage:
`url(${images ? images[0] : 'url(../../../public/images/sweet.jpeg)'})`
        }} />

        <div className="justify-space-between">
          <div className="ah-recentCard__title">
            <h1 className="title ah-recentCard__title is-5">
              <Link to={`/articles/${slug}`} >
                {title}
              </Link>
            </h1>
          </div>
        </div>
        <p className="ah-recentCard__description">
          {description.slice(0, 35)}...</p>
        <div className="justify-space-between">
          <div className="ah-recentCard_readtime">
            <span>{timeFormatter(readtime)}</span>
          </div>
          <div className="ah-recentCard_bookmark"/>
        </div>
      </div>
    </div>
  );
};

BookmarkCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default BookmarkCard;
