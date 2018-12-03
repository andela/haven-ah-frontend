
import {
  TRENDING_ARTICLES_REQUEST,
  TRENDING_ARTICLES_SUCCESS,
  TRENDING_ARTICLES_FAILURE
} from '../actionTypes/trendingActionType';


export const trendingArticlesAction = () => ({
  type: TRENDING_ARTICLES_REQUEST,
});

export const trendingArticlesSuccessAction = articles => ({
  type: TRENDING_ARTICLES_SUCCESS,
  articles,
});

export const trendingArticlesFailureAction = error => ({
  type: TRENDING_ARTICLES_FAILURE,
  error,
});
