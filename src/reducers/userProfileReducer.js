import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  USER_BOOKMARK_SUCCESS,
  USER_BOOKMARK_FAILURE,
  UPDATE_USER_IMAGE,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE
} from '../actionTypes/userProfileActionType';

const initialState = {
  fetching: false,
  profile: null,
  bookmarks: null,
  error: null,
  updating: false,
  userData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case USER_PROFILE_REQUEST:
    return { ...state, fetching: true, error: null };
  case USER_PROFILE_SUCCESS:
    return {
      ...state,
      error: null,
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
  case UPDATE_USER_IMAGE:
    return {
      ...state,
      profile: {
        ...state.profile,
        imageUrl: action.payload
      }
    };
  case EDIT_PROFILE_REQUEST:
    return {
      ...state,
      updating: true,
      error: null
    };
  case EDIT_PROFILE_SUCCESS:
    return {
      ...state,
      updating: false,
      userData: action.payload
    };
  case EDIT_PROFILE_FAILURE:
    return {
      ...state,
      updating: false,
      error: action.payload
    };
  default:
    return state;
  }
};
