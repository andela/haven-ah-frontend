import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from 'react-testing-library';
import CommentSection
  from '../../../components/containers/comments/CommentSection';

afterEach(cleanup);

describe('Comment section component', () => {
  const comments = [{
    User: {
      username: 'username'
    },
    Replies: [
      {
        id: 1
      }
    ]
  }];

  it('should render without crashing', () => {
    const postComment = jest.fn();
    const getComments = jest.fn();

    render(
      <Router>
        <CommentSection fetching
          comments={comments}
          postComment={postComment}
          getComments={getComments}
          slug={'slug'}
          newComment={{}} />
      </Router>
    );
  });

  it('should load comments on button click', () => {
    const postComment = jest.fn();
    const getComments = jest.fn();

    const { getByTestId } = render(
      <Router>
        <CommentSection fetching={false}
          comments={[]}
          postComment={postComment}
          getComments={getComments}
          slug={'slug'}
          newComment={{}} />
      </Router>
    );

    const btn = getByTestId('load-comments-btn');
    fireEvent.click(btn);

    expect(getComments).toHaveBeenCalledTimes(1);
  });
});
