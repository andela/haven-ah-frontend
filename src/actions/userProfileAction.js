import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE
} from '../actionTypes/userProfileActionType';

export const userProfileAction = username => ({
  type: USER_PROFILE_REQUEST,
  payload: username,
});

export const userProfileSuccessAction = profile => ({
  type: USER_PROFILE_SUCCESS,
  payload: profile,
});

export const userProfileFailureAction = error => ({
  type: USER_PROFILE_FAILURE,
  payload: error,
});
