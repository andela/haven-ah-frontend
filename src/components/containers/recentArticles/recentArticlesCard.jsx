import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import timeFormatter from '../../../helpers/timeFormatter';
import defaultImage from '../../../../public/images/empty.jpeg';
import BookmarkArticle from '../bookmarkArticle/bookmarkArticle';
/**
 *
 * @param {object} article
 * @returns article card
 */
const recentArticlesCard = ({ article }) => {
  const {
    id, title, images, description, readtime, slug,
    Author: { username, imageUrl },
  } = article;
  return (
    <div className="column" key={id}>
      <div className="ah-recentCard">
        <div className="ah-recentCard__image" style={{
          backgroundImage:
            `url(${images
              ? images[0] : 'url(../../../public/images/sweet.jpeg)'})`
        }} />

        <div className="justify-space-between">
          <div className="ah-recentCard__title">
            <h1 className="title ah-recentCard__title is-5">
              <Link to={`articles/${slug}`}>{title}</Link>
            </h1>
          </div>
        </div>
        <p className="ah-recentCard__description">
          {description.slice(0, 35)}...</p>
        <div className="justify-space-between">
          <div className="ah-recentCard_author-image">
            <img className="circular-avatar"
              style={{
                backgroundImage:
                  `url(${imageUrl || defaultImage})`
              }} alt="" />
          </div>
          <div className="ah-recentCard_author">
            <span>{username}</span>
          </div>
          <div className="ah-recentCard_readtime">
            <span>{timeFormatter(readtime)}</span>
          </div>
          <div className="ah-recentCard_bookmark">
            <BookmarkArticle article={article} />
          </div>
        </div>
      </div>
    </div>
  );
};

recentArticlesCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default recentArticlesCard;
