import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { history } from '../../testUtilities/mockData';
import store from '../../testUtilities/store';
import CommentSection
  from '../../../components/containers/comments/CommentSection';

afterEach(cleanup);

const commentHistory = store(history);

describe('Comment section component', () => {
  const postComment = jest.fn();
  const getComments = jest.fn();
  const getHistory = jest.fn();

  const comments = [{
    User: {
      username: 'username'
    },
    Replies: [
      {
        id: 1
      }
    ],
    createdAt: new Date()
  },
  {
    User: {
      username: 'username'
    },
    Replies: [
      {
        id: 2
      }
    ],
    createdAt: new Date()
  },
  ];

  it('should render without crashing', () => {
    render(
      <CommentSection store={commentHistory}
        fetching
        comments={comments}
        postComment={postComment}
        getComments={getComments}
        commentHistory={comments}
        getHistory={getHistory}
        slug={'slug'}
        newComment={{}} />
    );
  });

  it('should load comments on button click', () => {
    const { getByTestId } = render(
      <CommentSection store={commentHistory}
        fetching={false}
        comments={[]}
        postComment={postComment}
        getComments={getComments}
        commentHistory={comments}
        getHistory={getHistory}
        slug={'slug'}
        newComment={{}} />
    );

    const btn = getByTestId('load-comments-btn');
    fireEvent.click(btn);

    expect(getComments).toHaveBeenCalledTimes(1);
  });
});
