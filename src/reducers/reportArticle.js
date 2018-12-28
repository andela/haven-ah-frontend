import {
  REPORT_ARTICLE_REQUEST,
  REPORT_ARTICLE_SUCCESS,
  REPORT_ARTICLE_FAILURE
} from '../actionTypes/reportArticleActionTypes';

const initialState = {
  reporting: false,
  message: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case REPORT_ARTICLE_REQUEST:
    return { ...state, reporting: true };
  case REPORT_ARTICLE_SUCCESS:
    return { ...state, message: action.payload };
  case REPORT_ARTICLE_FAILURE:
    return { ...state, error: action.payload };
  default:
    return state;
  }
};
