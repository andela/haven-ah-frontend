import {
  TRENDING_ARTICLES_REQUEST,
  TRENDING_ARTICLES_SUCCESS,
  TRENDING_ARTICLES_FAILURE
} from '../actionTypes/trendingActionType';

const initialState = {
  fetching: false,
  articles: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case TRENDING_ARTICLES_REQUEST:
    return { ...state, fetching: true, error: null };
  case TRENDING_ARTICLES_SUCCESS:
    return { ...state, fetching: false, articles: action.articles };
  case TRENDING_ARTICLES_FAILURE:
    return {
      ...state, fetching: false, article: null, error: action.error,
    };
  default:
    return state;
  }
};
