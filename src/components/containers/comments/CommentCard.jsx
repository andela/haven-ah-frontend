import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatTime } from '../../../helpers/timeFormatter';
import { getUsername } from '../../../utilities/auth';
import image from '../../../../public/images/man.png';
import './comment.scss';

class CommentCard extends Component {
  state = {}

  modalContainer = React.createRef();

  displayModal = (event, comment, Replies) => {
    event.preventDefault();
    const { displayModal } = this.props;
    displayModal(comment, Replies);
  }

  toggleReply = (event) => {
    event.preventDefault();
  }

  getHistory = (event) => {
    const { getHistory } = this.props;
    getHistory(event.target.id);
  }

  render() {
    const { comment } = this.props;
    const {
      body, User, createdAt, highlightedText, Replies
    } = comment;
    return (
      <div className="comment-card">
        <div className="justify-content__start">
          <div className="comment-card__creator">
            <img className="circular-avatar"
              src={(User && User.imageUrl) || image}
            />
          </div>
          <div className="comment-card__name">
            <div>
              {User
                && User.username
                && <Link to={`/users/${User.username}/profile`}
                  className="ah-orange is-size-7">
                  {User.firstName} {User.lastName}
                </Link>
              }
              {
                !User && <p>You</p>
              }
            </div>
            <div className="comment-card__time">{
              formatTime(createdAt)}
            </div>
          </div>
        </div>
        {
          highlightedText
          && <div className="comment-highlighted-textbox">
            <p className="highlighted-text">{highlightedText}</p>
          </div>
        }
        <div className="comment-card__content">
          <p>{body}</p>
        </div>
        <div className="justify-space-between mt-1">
          {
            Replies && Replies.length > 0 && <span className="ml-1">
              <a href=""
                data-testid="toggle-modal"
                className="mr-s icon-grey toggleModal"
                onClick={(event) => { this.displayModal(event, comment, Replies); }}
              >
                <i className="fa fa-reply" /> {Replies.length}
              </a>
            </span>
          }
          <div>
            <a className="comment-card__reply-text"
              onClick={this.toggleReply}>
              Reply
            </a>
            {
              comment.hasBeenEdited && comment.User.username === getUsername()
              && <a className="comment-card__reply-text"
                data-testid="toggle-history"
                id={comment.id}
                onClick={this.getHistory}>
                edited <i className="fa fa-caret-up" />
              </a>
            }
          </div>
        </div>
      </div>
    );
  }
}

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
  displayModal: PropTypes.func,
  getHistory: PropTypes.func,
};

export default CommentCard;
