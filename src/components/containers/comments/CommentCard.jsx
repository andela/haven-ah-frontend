import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatTime } from '../../../helpers/timeFormatter';
import ReactionButtons from '../reactions/reactionButtons';
import image from '../../../../public/images/eyes.jpeg';
import './comment.scss';

class CommentCard extends Component {
  state = {}

  modalContainer = React.createRef();

  displayModal = (event, comment, Replies) => {
    event.preventDefault();
    const { displayModal } = this.props;
    displayModal(comment, Replies);
    console.log('toggle clicked');
  }

  toggleReply = (event) => {
    event.preventDefault();
  }

  render() {
    const { comment } = this.props;
    const {
      id, body, User, createdAt, highlightedText, Reactions, Replies
    } = comment;

    return (
      <div>
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
            <p>{body}
            </p>
          </div>
          <div className="justify-space-between mt-1">
            <div className="justify-content__start comment-card__reaction">
              <ReactionButtons
                commentId={id}
                loves={Reactions.loves}
                hasLoved={Reactions.currentUserReaction === 'Love'}
                likes={Reactions.likes}
                hasLiked={Reactions.currentUserReaction === 'Like'}
              />
              {
                Replies && <span className="ml-1">
                  <a href="" className="mr-s icon-grey toggleModal"
                    onClick={(event) => { this.displayModal(event, comment, Replies); }}>
                    <i className="fa fa-reply " /> {Replies.length}
                  </a>
                </span>
              }
            </div>
            <a className="comment-card__reply-text" onClick={this.toggleReply}>
              Reply
            </a>
          </div>
        </div>
      </div>
    );
  }
}

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
  displayModal: PropTypes.func,
};

export default CommentCard;
