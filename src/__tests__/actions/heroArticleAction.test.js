import {
  heroArticleAction,
  heroArticleSuccessAction,
  heroArticleFailureAction
} from '../../actions/heroArticleAction';

import {
  HERO_ARTICLE_REQUEST,
  HERO_ARTICLE_FAILURE,
  HERO_ARTICLE_SUCCESS,
} from '../../actionTypes/heroActionType';

describe('Hero Article Action', () => {
  it('should return the correct action', () => {
    expect(heroArticleAction()).toEqual({
      type: HERO_ARTICLE_REQUEST,
    });
  });
});
describe('Hero Article Action Success', () => {
  it('should return the correct action', () => {
    expect(heroArticleSuccessAction({ article: 'dummy article' })).toEqual({
      type: HERO_ARTICLE_SUCCESS,
      article: {
        article: 'dummy article'
      },
    });
  });
});
describe('Hero Article Action Failure', () => {
  it('should return the correct action', () => {
    expect(heroArticleFailureAction({ error: 'Bad request' })).toEqual({
      type: HERO_ARTICLE_FAILURE,
      error: {
        error: 'Bad request'
      },
    });
  });
});
