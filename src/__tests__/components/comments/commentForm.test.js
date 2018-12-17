import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import CommentForm from '../../../components/containers/comments/CommentForm';

afterEach(cleanup);

describe('Comment form component', () => {
  it('should call the post comment function on submission', () => {
    const showInput = jest.fn();
    const postComment = jest.fn();

    const { getByText, getByTestId } = render(
      <CommentForm
        slug="slug"
        postComment={postComment} />
    );

    const commentForm = getByText('Add comment...');

    commentForm.onclick = showInput;
    fireEvent.click(commentForm);
    expect(showInput).toHaveBeenCalledTimes(1);
    expect(commentForm).toBeDefined();

    const textArea = getByTestId('comment-input');

    fireEvent.change(textArea, { target: { value: 'Hello there' } });
    expect(textArea.value).toEqual('Hello there');

    const commentBtn = getByText('Comment');
    fireEvent.click(commentBtn);
    expect(postComment).toHaveBeenCalledTimes(1);
  });

  it('should not submit form on empty input', () => {
    const showInput = jest.fn();
    const postComment = jest.fn();

    const { getByText, getByTestId } = render(
      <CommentForm
        slug="slug"
        postComment={postComment} />
    );
    const commentForm = getByText('Add comment...');

    commentForm.onclick = showInput;
    fireEvent.click(commentForm);
    const textArea = getByTestId('comment-input');
    const commentBtn = getByText('Comment');
    fireEvent.click(commentBtn);

    expect(textArea.value).toEqual('');
    expect(postComment).toHaveBeenCalledTimes(0);
  });
});
