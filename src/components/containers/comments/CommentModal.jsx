import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';

class CommentModal extends Component {
  state = {}

  closeModal = (event) => {
    this.props.hideModal(event);
  }

  render() {
    const {
      comment, replies, displayModal, displayHistoryModal, slug
    } = this.props;
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title" id="comment-modal__title">
              Comment by <span className="ah-orange">
                {`${comment.User.firstName} ${comment.User.lastName}`}
              </span>
            </p>
            <button
              data-testid="close-modal"
              className="delete is-orange"
              aria-label="close" onClick={this.closeModal} />
          </header>
          <section className="modal-card-body">
            {
              <CommentCard
                comment={comment}
                displayModal={displayModal}
                displayHistoryModal={displayHistoryModal}
                slug={slug} />
            }
            <div className="mt-1">
              <p className="is-size-5 ah-orange has-text-centered">Replies</p>
            </div>
            {
              replies.sort((element, prevElement) => {
                return (
                  new Date(element.createdAt) - new Date(prevElement.createdAt)
                );
              }).map(
                reply => (
                  <CommentCard
                    comment={reply} key={reply.id}
                    displayModal={displayModal}
                    displayHistoryModal={displayHistoryModal}
                    slug={slug} />)
              )
            }
          </section>
          <footer className="modal-card-foot" />
        </div>
      </div>
    );
  }
}

CommentModal.propTypes = {
  comment: PropTypes.object.isRequired,
  replies: PropTypes.array.isRequired,
  displayModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  displayHistoryModal: PropTypes.func
};

export default CommentModal;
