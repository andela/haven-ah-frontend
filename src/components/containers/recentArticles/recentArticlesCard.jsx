import React from 'react';
import PropTypes from 'prop-types';
import timeFormatter from '../../../helpers/timeFormatter';
/**
 *
 * @param {object} article
 * @returns article card
 */
const recentArticlesCard = ({ article }) => {
  const {
    id, title, images, description, readtime,
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
              {title}
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

recentArticlesCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default recentArticlesCard;
