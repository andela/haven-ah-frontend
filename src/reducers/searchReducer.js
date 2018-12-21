import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from '../actionTypes/searchActionTypes';

const initialState = {
  fetching: false,
  articles: null,
  error: null,
};


const searchReducer = (state = initialState, action) => {
  switch (action.type) {
  case SEARCH_REQUEST:
    return { ...state, fetching: true, error: null };
  case SEARCH_SUCCESS:
    return { ...state, fetching: false, articles: action.payload };
  case SEARCH_FAILURE:
    return {
      ...state, fetching: false, articles: null, error: action.payload
    };
  default:
    return state;
  }
};

export default searchReducer;
