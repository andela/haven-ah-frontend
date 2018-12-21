import {
  HERO_ARTICLE_FAILURE,
  HERO_ARTICLE_REQUEST,
  HERO_ARTICLE_SUCCESS
} from '../actionTypes/heroActionType';

const initialState = {
  fetching: false,
  articles: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case HERO_ARTICLE_REQUEST:
    return { ...state, fetching: true, error: null };
  case HERO_ARTICLE_SUCCESS:
    return { ...state, fetching: false, articles: action.article };
  case HERO_ARTICLE_FAILURE:
    return {
      ...state, fetching: false, articles: [], error: action.error,
    };
  default:
    return state;
  }
};
