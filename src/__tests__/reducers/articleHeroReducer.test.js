import articleHeroReducer from '../../reducers/heroArticleReducer';
import * as types from '../../actionTypes/heroActionType';

describe('Article Hero reducer: ', () => {
  it('should have a default state', () => {
    expect(articleHeroReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      articles: [],
      error: null
    });
  });

  it('should update the reducer state', () => {
    expect(articleHeroReducer(undefined, {
      type: types.HERO_ARTICLE_REQUEST
    })).toEqual({
      fetching: true,
      articles: [],
      error: null
    });
  });

  it('should update the hero article', () => {
    expect(articleHeroReducer(undefined, {
      type: types.HERO_ARTICLE_SUCCESS,
      article: []
    })).toEqual({
      fetching: false,
      articles: [],
      error: null
    });
  });

  it('should add error to article hero state', () => {
    expect(articleHeroReducer(undefined, {
      type: types.HERO_ARTICLE_FAILURE,
      error: 'Bad request'
    })).toEqual({
      fetching: false,
      articles: [],
      error: 'Bad request'
    });
  });
});
