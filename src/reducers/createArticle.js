import {
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_SUCCESS
} from '../actionTypes/createArticle';

import { CLEAR_REDIRECT } from '../actionTypes/articleThreadActionTypes';

const initialState = {
  slug: null,
  error: null,
  publishing: false
};

const createArticleReducer = (state = initialState, action) => {
  switch (action.type) {
  case CREATE_ARTICLE_REQUEST:
    return {
      ...state, publishing: true,
    };
  case CREATE_ARTICLE_FAILURE:
    return {
      ...state, error: action.payload, publishing: false
    };
  case CREATE_ARTICLE_SUCCESS:
    return {
      ...state, slug: action.payload, publishing: false
    };
  case CLEAR_REDIRECT:
    return {
      ...state, slug: null, publishing: false
    };
  default:
    return state;
  }
};

export default createArticleReducer;
