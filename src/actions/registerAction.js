import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actionTypes/registerActionType';

export const registerRequestAction = payload => ({
  type: REGISTER_REQUEST,
  payload,
});

export const registerSuccessAction = response => ({
  type: REGISTER_SUCCESS,
  token: response.token
});

export const registerFailureAction = response => ({
  type: REGISTER_FAILURE,
  error: response.message
});
