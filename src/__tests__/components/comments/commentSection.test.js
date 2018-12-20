import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from 'react-testing-library';
import CommentSection
  from '../../../components/containers/comments/CommentSection';
import store from '../../testUtilities/store';
import { comments, articleThread } from '../../testUtilities/mockData';

afterEach(cleanup);

const articleThreadStore = store(articleThread);

describe('Comment section component', () => {
  it('should render without crashing', () => {
    const postComment = jest.fn();
    const getComments = jest.fn();

    render(
      <Provider store={articleThreadStore}>
        <CommentSection fetching
          comments={comments}
          postComment={postComment}
          getComments={getComments}
          slug={'slug'}/>
      </Provider>
    );
  });

  it('should load comments on button click', () => {
    const postComment = jest.fn();
    const getComments = jest.fn();

    const { getByTestId } = render(
      <Provider store={articleThreadStore}>
        <CommentSection fetching={false}
          comments={[]}
          postComment={postComment}
          getComments={getComments}
          slug={'slug'} />
      </Provider>
    );

    const btn = getByTestId('load-comments-btn');
    fireEvent.click(btn);

    expect(getComments).toHaveBeenCalledTimes(1);
  });
});
