import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAN_UP,
} from '../actionTypes/loginActionType';

export const loginRequestAction = payload => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccessAction = response => ({
  type: LOGIN_SUCCESS,
  payload: response.token,
});

export const loginFailureAction = response => ({
  type: LOGIN_FAILURE,
  payload: response.message,
});

export const cleanUp = () => ({
  type: CLEAN_UP,
});
