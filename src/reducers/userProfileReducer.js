import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  USER_BOOKMARK_SUCCESS,
  USER_BOOKMARK_FAILURE,
  REMOVE_BOOKMARK
} from '../actionTypes/userProfileActionType';

const initialState = {
  fetching: false,
  profile: null,
  bookmarks: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case USER_PROFILE_REQUEST:
    return { ...state, fetching: true, error: null };
  case USER_PROFILE_SUCCESS:
    return {
      ...state,
      error: false,
      fetching: false,
      profile: action.payload
    };
  case USER_PROFILE_FAILURE:
    return {
      ...state,
      fetching: false,
      error: action.payload,
    };
  case USER_BOOKMARK_SUCCESS:
    return {
      ...state,
      fetching: false,
      bookmarks: action.payload,
    };
  case USER_BOOKMARK_FAILURE:
    return {
      ...state,
      fetching: false,
      error: action.payload,
    };
  case REMOVE_BOOKMARK:
    return {
      ...state,
      bookmarks: state.bookmarks
        .filter(bookmark => bookmark.id !== action.payload)
    };
  default:
    return state;
  }
};
