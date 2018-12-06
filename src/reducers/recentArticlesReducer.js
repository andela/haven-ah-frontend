import {
  RECENT_ARTICLES_FAILURE,
  RECENT_ARTICLES_REQUEST,
  RECENT_ARTICLES_SUCCESS
} from '../actionTypes/recentArticlesType';

const initialState = {
  fetching: false,
  articles: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case RECENT_ARTICLES_REQUEST:
    return { ...state, fetching: true, error: null };
  case RECENT_ARTICLES_SUCCESS:
    return {
      ...state,
      error: false,
      fetching: false,
      articles: action.articles
    };
  case RECENT_ARTICLES_FAILURE:
    return {
      ...state, fetching: false, articles: null, error: action.error,
    };
  default:
    return state;
  }
};
