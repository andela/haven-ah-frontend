import {
  ARTICLE_THREAD_REQUEST,
  ARTICLE_THREAD_FAILURE,
  ARTICLE_THREAD_SUCCESS
} from '../actionTypes/articleThreadActionTypes';

const initialState = {
  fetching: false,
  article: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ARTICLE_THREAD_REQUEST:
    return { ...state, fetching: true, error: null };
  case ARTICLE_THREAD_SUCCESS:
    return { ...state, fetching: false, article: action.payload };
  case ARTICLE_THREAD_FAILURE:
    return {
      ...state, fetching: false, article: null, error: action.payload,
    };
  default:
    return state;
  }
};
