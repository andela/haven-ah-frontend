import {
  BOOKMARK_ARTICLE_REQUEST,
  BOOKMARK_ARTICLE_SUCCESS,
  BOOKMARK_ARTICLE_FAILURE,
  UNBOOKMARK_ARTICLE_REQUEST,
  UNBOOKMARK_ARTICLE_SUCCESS,
  UNBOOKMARK_ARTICLE_FAILURE,
} from '../actionTypes/bookmarkArticleActionTypes';

const initialState = {
  fetching: false,
  payload: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case BOOKMARK_ARTICLE_REQUEST:
    return { ...state, fetching: true, error: null };
  case BOOKMARK_ARTICLE_SUCCESS:
    return { ...state, fetching: false, payload: action.payload };
  case BOOKMARK_ARTICLE_FAILURE:
    return {
      ...state, fetching: false, payload: null, error: action.error,
    };
  case UNBOOKMARK_ARTICLE_REQUEST:
    return { ...state, fetching: true, error: null };
  case UNBOOKMARK_ARTICLE_SUCCESS:
    return { ...state, fetching: false, payload: action.payload };
  case UNBOOKMARK_ARTICLE_FAILURE:
    return {
      ...state, fetching: false, payload: null, error: action.error,
    };
  default:
    return state;
  }
};
