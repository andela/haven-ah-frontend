import React from 'react';
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
    const showCommentInput = jest.fn();
    const commentInputState = true;
    const commentInput = React.createRef();
    const highlightedText = '';
    const closeHighlight = jest.fn();

    render(
      <CommentSection fetching
        comments={comments}
        postComment={postComment}
        getComments={getComments}
        slug={'slug'}
        newComment={{}}
        showCommentInput={showCommentInput}
        commentInputState={commentInputState}
        commentInput={commentInput}
        highlightedText={highlightedText}
        closeHighlight={closeHighlight} />
    );
  });

  it('should load comments on button click', () => {
    const postComment = jest.fn();
    const getComments = jest.fn();
    const showCommentInput = jest.fn();
    const commentInputState = true;
    const commentInput = React.createRef();
    const highlightedText = '';
    const closeHighlight = jest.fn();

    const { getByTestId } = render(
      <CommentSection fetching={false}
        comments={[]}
        postComment={postComment}
        getComments={getComments}
        slug={'slug'}
        newComment={{}}
        showCommentInput={showCommentInput}
        commentInputState={commentInputState}
        commentInput={commentInput}
        highlightedText={highlightedText}
        closeHighlight={closeHighlight} />
    );

    const btn = getByTestId('load-comments-btn');
    fireEvent.click(btn);

    expect(getComments).toHaveBeenCalledTimes(1);
  });
});
