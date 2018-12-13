import {
  createArticleRequest,
  createArticleFailure,
  createArticleSuccess
} from '../../actions/createArticle';

import {
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_SUCCESS
} from '../../actionTypes/createArticle';

describe('Create article request action', () => {
  it('should return the predefined action', () => {
    expect(createArticleRequest({ dummy: {} })).toEqual({
      type: CREATE_ARTICLE_REQUEST,
      payload: {
        dummy: {}
      }
    });
  });
});
describe('Create article Success action', () => {
  it('should return the correct action type and payload', () => {
    expect(createArticleSuccess({ article: 'dummy article' })).toEqual({
      type: CREATE_ARTICLE_SUCCESS,
      payload: {
        article: 'dummy article'
      },
    });
  });
});
describe('Create article failure action', () => {
  it('should return the correct action type and payload', () => {
    expect(createArticleFailure({ error: 'Bad response' })).toEqual({
      type: CREATE_ARTICLE_FAILURE,
      payload: {
        error: 'Bad response'
      },
    });
  });
});
