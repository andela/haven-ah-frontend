import * as types from '../actionTypes/articleThreadActionTypes';

const initialState = {
  fetching: false,
  commenting: false,
  article: null,
  newComment: null,
  comments: [],
  error: null,
  commentError: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.ARTICLE_THREAD_REQUEST:
    return { ...state, fetching: true, error: null };
  case types.ARTICLE_THREAD_SUCCESS:
    return { ...state, fetching: false, article: action.payload };
  case types.ARTICLE_THREAD_FAILURE:
    return {
      ...state, fetching: false, article: null, error: action.payload,
    };
  case types.GET_COMMENTS_REQUEST:
    return { ...state, fetching: true, };
  case types.GET_COMMENTS_SUCCESS:
    return { ...state, comments: action.payload, fetching: false, };
  case types.GET_COMMENTS_FAILURE:
    return { ...state, fetching: false, error: action.payload };
  case types.POST_COMMENT_REQUEST:
    return { ...state, commenting: true };
  case types.POST_COMMENT_SUCCESS:
    return { ...state, newComment: action.payload };
  case types.POST_COMMENT_FAILURE:
    return { ...state, commentError: action.error };
  default:
    return state;
  }
};
