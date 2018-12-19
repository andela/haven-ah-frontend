import {
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_REQUEST_FAILURE,
  PASSWORD_RESET_REQUEST_SUCCESS,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_SUCCESS,
  CONFIRM_TOKEN_FAILURE,
  CONFIRM_TOKEN_SUCCESS,
  CONFIRM_TOKEN_REQUEST,
  CLEAR_UPDATE_MESSAGE
} from '../actionTypes/passwordReset';

export const passwordResetRequest = payload => ({
  type: PASSWORD_RESET_REQUEST,
  payload,
});

export const passwordResetRequestSuccess = () => ({
  type: PASSWORD_RESET_REQUEST_SUCCESS,
});

export const passwordResetFailure = () => ({
  type: PASSWORD_RESET_REQUEST_FAILURE,
});

export const confirmTokenRequest = payload => ({
  type: CONFIRM_TOKEN_REQUEST,
  payload
});

export const confirmTokenSuccess = () => ({
  type: CONFIRM_TOKEN_SUCCESS,
});

export const confirmTokenFailure = () => ({
  type: CONFIRM_TOKEN_FAILURE,
});

export const updatePasswordRequest = payload => ({
  type: UPDATE_PASSWORD_REQUEST,
  payload
});

export const updatePasswordSuccess = () => ({
  type: UPDATE_PASSWORD_SUCCESS,
});

export const updatePasswordFailure = () => ({
  type: UPDATE_PASSWORD_FAILURE,
});

export const clearUpdateMessage = () => ({
  type: CLEAR_UPDATE_MESSAGE,
});
