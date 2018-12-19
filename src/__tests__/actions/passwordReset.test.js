import {
  passwordResetRequest,
  passwordResetFailure,
  passwordResetRequestSuccess,
  confirmTokenRequest,
  confirmTokenFailure,
  confirmTokenSuccess,
  updatePasswordRequest,
  updatePasswordFailure,
  updatePasswordSuccess
} from '../../actions/passwordReset';

import * as types from '../../actionTypes/passwordReset';

describe('Password reset request action', () => {
  it('should return the predefined action', () => {
    expect(passwordResetRequest('payload')).toEqual({
      type: types.PASSWORD_RESET_REQUEST,
      payload: 'payload'
    });
  });

  it('should return the predefined action', () => {
    expect(passwordResetFailure()).toEqual({
      type: types.PASSWORD_RESET_REQUEST_FAILURE
    });
  });

  it('should return the predefined action', () => {
    expect(passwordResetRequestSuccess()).toEqual({
      type: types.PASSWORD_RESET_REQUEST_SUCCESS
    });
  });
});

describe('Token confimation action', () => {
  it('should return the predefined action', () => {
    expect(confirmTokenRequest('payload')).toEqual({
      type: types.CONFIRM_TOKEN_REQUEST,
      payload: 'payload'
    });
  });

  it('should return the predefined action', () => {
    expect(confirmTokenFailure()).toEqual({
      type: types.CONFIRM_TOKEN_FAILURE
    });
  });

  it('should return the predefined action', () => {
    expect(confirmTokenSuccess()).toEqual({
      type: types.CONFIRM_TOKEN_SUCCESS
    });
  });
});

describe('Password update action', () => {
  it('should return the predefined action', () => {
    expect(updatePasswordRequest('payload')).toEqual({
      type: types.UPDATE_PASSWORD_REQUEST,
      payload: 'payload'
    });
  });

  it('should return the predefined action', () => {
    expect(updatePasswordFailure()).toEqual({
      type: types.UPDATE_PASSWORD_FAILURE
    });
  });

  it('should return the predefined action', () => {
    expect(updatePasswordSuccess()).toEqual({
      type: types.UPDATE_PASSWORD_SUCCESS
    });
  });
});
