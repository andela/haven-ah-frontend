import {
  HERO_ARTICLE_REQUEST,
  HERO_ARTICLE_FAILURE,
  HERO_ARTICLE_SUCCESS,
} from '../actionTypes/heroActionType';


export const heroArticleAction = () => ({
  type: HERO_ARTICLE_REQUEST,
});

export const heroArticleSuccessAction = article => ({
  type: HERO_ARTICLE_SUCCESS,
  article,
});

export const heroArticleFailureAction = error => ({
  type: HERO_ARTICLE_FAILURE,
  error,
});
