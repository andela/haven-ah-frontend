import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../recentArticles/recentArticles.css';
import timeFormatter from '../../../helpers/timeFormatter';
import defaultImage from '../../../../public/images/empty.jpeg';
import BookmarkArticle from '../bookmarkArticle/bookmarkArticle';

/**
 *
 * @param {object} article
 * @returns search results card
 */
const SearchResultCards = ({ article }) => {
  const {
    id, title, images, description, readtime, slug,
    Author: { username, imageUrl },
  } = article;
  return (
    <div className="search--card" key={id}>
      <div className="columns">
        <div className="column is-5">
          <div className="search--card_image" style={{
            backgroundImage:
             `url(${images
               ? images[0] : 'url(../../../public/images/sweet.jpeg)'})`
          }} />
        </div>
        <div className="column is-7">
          <div className="search--card_details">
            <div className="search--card_details-title">
              <h1 className="title is-4">
                <Link to={`articles/${slug}`}>{title}</Link></h1>
            </div>
            <div className="search--card_details-desc">
              <p> {description.slice(0, 95)}...</p>
            </div>
            <div>
              <div className="search--card_userdetails">
                <div className="justify-content__start">
                  <div className="search--card_details-image">
                    <img className="circular-avatar" style={{
                      backgroundImage:
                   `url(${imageUrl || defaultImage})`
                    }} alt="" />
                  </div>
                  <span className="search--card_details-authorname">
                    {username}</span>
                </div>
                <span className="search--card_details-readtime">
                  {timeFormatter(readtime)}</span>
                <span className="search--card_details-bookmark">
                  <BookmarkArticle article={article} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchResultCards.propTypes = {
  article: PropTypes.object.isRequired,
};

export default SearchResultCards;
