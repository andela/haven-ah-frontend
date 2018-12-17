import React from 'react';
import PropTypes from 'prop-types';
import { formatTime } from '../../../helpers/timeFormatter';

const CommentHistoryModal = ({ comments, closeModal }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title" id="comment-modal__title">
            Your comment edit history
          </p>
          <button
            data-testid="close-modal"
            className="delete is-orange"
            aria-label="close" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          {
            comments.map(
              comment => (
                <div className="edited-replies" key={comment.id}>
                  {comment.oldComment}
                  <div className="justify-content__start">
                    <div className="edited-replies__time">
                      (edited): {formatTime(new Date(comment.createdAt))}
                    </div>
                  </div>
                </div>
              )
            )
          }
        </section>
        <footer className="modal-card-foot" />
      </div>
    </div>
  );
};

CommentHistoryModal.propTypes = {
  comments: PropTypes.array,
  closeModal: PropTypes.func
};

export default CommentHistoryModal;
