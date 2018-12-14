import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import CommentCard from './CommentCard';

class CommentModal extends Component {
  state = {}

  closeModal = (event) => {
    this.props.hideModal(event);
  }

  render() {
    console.log('re-rendered');
    const { comment, replies, displayModal } = this.props;
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Replies</p>
            <button className="delete" aria-label="close" />
          </header>
          <section className="modal-card-body">
            {
              <CommentCard comment={comment} displayModal={displayModal}/>
            }
            <p>Replies</p>
            {
              replies.map(reply => <CommentCard comment={reply} key={reply.id} displayModal={displayModal}/>)
            }
          </section>
          <footer className="modal-card-foot">
            <button className="button is-orange is-small">Save changes</button>
            <button className="button is-small"
              onClick={this.closeModal}>Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default CommentModal;
