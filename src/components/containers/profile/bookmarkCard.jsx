import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import timeFormatter from '../../../helpers/timeFormatter';
import './profile.scss';

class BookmarkCard extends PureComponent {
  handleUnbookmark = () => {
    const {
      removeBookmark,
      unbookmarkArticleAction,
      article: {
        slug,
        id
      }
    } = this.props;
    unbookmarkArticleAction(slug, id);
    removeBookmark(id);
  };

  render() {
    const {
      article
    } = this.props;
    const {
      id, title, images, description, readtime, slug
    } = article;
    return (
      <div key={id} className="bookmark--card">
        <div className="columns">
          <div className="column is-5">
            <div
              className="bookmark--card__image"
              style={{
                backgroundImage:
  `url(${images ? images[0] : 'url(../../../public/images/sweet.jpeg)'})`
              }}
            />
          </div>
          <div className="column is-7">
            <div className="bookmark--card__details">
              <div className="bookmark--card__details-title">
                <h1 className="title is-4">
                  <Link to={`/articles/${slug}`} >
                    {title}
                  </Link>
                </h1>
              </div>
              <div className="bookmark--card__details-desc">
                <p>{description}</p>
              </div>
              <div>
                <div className="bookmark--card__userdetails">
                  <div className="justify-content__start">
                    <div className="bookmark--card_details-image">
                      <img className="circular-avatar" src="" alt="" />
                    </div>
                    <span className="bookmark--card__details-authorname" />
                  </div>
                  <span className="bookmark--card__details-readtime">
                    {timeFormatter(readtime)}
                  </span>
                  <span
                    onClick={this.handleUnbookmark}
                    className="bookmark--card__details-bookmark"
                  >
                    <i className="fa fa-trash-o" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BookmarkCard.propTypes = {
  article: PropTypes.object.isRequired,
  removeBookmark: PropTypes.func.isRequired,
  unbookmarkArticleAction: PropTypes.func.isRequired
};

export default BookmarkCard;
