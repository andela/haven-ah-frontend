import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from 'react-testing-library';
import CommentModal
  from '../../../components/containers/comments/CommentModal';

afterEach(cleanup);

describe('Comment section component', () => {
  const comment = {
    User: {
      firstName: 'Queen',
      lastName: 'User'
    },
    Replies: [
      {
        id: 1,
      }
    ]
  };

  it('should render without crashing', () => {
    const displayModal = jest.fn();
    const hideModal = jest.fn();

    render(
      <Router><CommentModal
        comment={comment}
        replies={[]}
        displayModal={displayModal}
        hideModal={hideModal} />
      </Router>
    );
  });

  it('should close modal on click of the close button', () => {
    const displayModal = jest.fn();
    const hideModal = jest.fn();


    const { getByTestId } = render(
      <Router>
        <CommentModal
          comment={comment}
          replies={comment.Replies}
          displayModal={displayModal}
          hideModal={hideModal} />
      </Router>
    );

    const closeBtn = getByTestId('close-modal');
    fireEvent.click(closeBtn);

    expect(hideModal).toHaveBeenCalledTimes(1);
  });
});
