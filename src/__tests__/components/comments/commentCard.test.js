import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
import CommentCard from '../../../components/containers/comments/CommentCard';

afterEach(cleanup);

describe('Comment modal component', () => {
  const displayModal = jest.fn();
  const getHistory = jest.fn();

  localStorage.setItem('username', 'Steph');
  const username = localStorage.getItem('username');

  const comment = {
    User: {
      username,
    },
    Replies: [
      {
        id: 1
      }
    ],
    hasBeenEdited: true,
  };

  it('should display modal', () => {
    const { getByTestId } = render(
      <Router>
        <CommentCard
          comment={comment}
          displayModal={displayModal}
          getHistory={getHistory} />
      </Router>
    );

    const toggle = getByTestId('toggle-modal');
    const toggleHistory = getByTestId('toggle-history');

    fireEvent.click(toggle);
    fireEvent.click(toggleHistory);

    expect(displayModal).toHaveBeenCalledTimes(1);
    expect(getHistory).toHaveBeenCalledTimes(1);
  });
});
