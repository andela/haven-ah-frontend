import {
  fetchArticle,
  fetchArticleFailure,
  fetchArticleSuccess,
  getComments,
  getCommentsSuccess,
  getCommentsFailure,
  postComment,
  postCommentSuccess,
  postCommentFailure,
} from '../../actions/articleThread';

import * as types from '../../actionTypes/articleThreadActionTypes';

describe('Article thread action', () => {
  it('should return the predefined action', () => {
    expect(fetchArticle()).toEqual({
      type: types.ARTICLE_THREAD_REQUEST,
    });
  });
});

describe('Fetch article Success ation', () => {
  it('should return the correct action type and payload', () => {
    expect(fetchArticleSuccess({ article: 'dummy article' })).toEqual({
      type: types.ARTICLE_THREAD_SUCCESS,
      payload: {
        article: 'dummy article'
      },
    });
  });
});

describe('Fetch article failure action', () => {
  it('should return the correct action type and payload', () => {
    expect(fetchArticleFailure({ error: 'Bad response' })).toEqual({
      type: types.ARTICLE_THREAD_FAILURE,
      payload: {
        error: 'Bad response'
      },
    });
  });
});

describe('Get comments request action', () => {
  it('should return a request object', () => {
    expect(getComments('slug')).toEqual({
      type: types.GET_COMMENTS_REQUEST,
      payload: 'slug',
    });
  });
});

describe('Get comments success action', () => {
  it('should return an object with comments', () => {
    expect(getCommentsSuccess([])).toEqual({
      type: types.GET_COMMENTS_SUCCESS,
      payload: [],
    });
  });
});

describe('Get comments failure action', () => {
  it('should return an object with error', () => {
    expect(getCommentsFailure({ message: 'error' })).toEqual({
      type: types.GET_COMMENTS_FAILURE,
      payload: 'error',
    });
  });
});


describe('Post comment request action', () => {
  it('should return a request object', () => {
    expect(postComment({})).toEqual({
      type: types.POST_COMMENT_REQUEST,
      payload: {},
    });
  });
});

describe('Post comment success action', () => {
  it('should return anew comment object', () => {
    expect(postCommentSuccess({})).toEqual({
      type: types.POST_COMMENT_SUCCESS,
      payload: {},
    });
  });
});

describe('Post comment failure action', () => {
  it('should return an object with error', () => {
    expect(postCommentFailure('Bad request')).toEqual({
      type: types.POST_COMMENT_FAILURE,
      payload: 'Bad request',
    });
  });
});
