import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE
} from '../actionTypes/userProfileActionType';

const initialState = {
  fetching: false,
  profile: null,
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
      ...state, fetching: false, profile: null, error: action.payload,
    };
  default:
    return state;
  }
};
