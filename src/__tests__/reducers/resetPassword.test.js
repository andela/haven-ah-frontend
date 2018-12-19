import resetPasswordReducer from '../../reducers/resetPassword';
import * as types from '../../actionTypes/passwordReset';

describe('Reset password reducer: ', () => {
  const state = {
    resetSuccess: false,
    emailSuccess: false,
    confirmSuccess: false,
    updateSuccess: false,
    error: null,
  };

  it('should have the correct default state', () => {
    expect(resetPasswordReducer(undefined, {
      type: 'non-existent type'
    })).toEqual(state);
  });

  it('should update the reducer state when successful', () => {
    expect(resetPasswordReducer(undefined, {
      type: types.PASSWORD_RESET_REQUEST_SUCCESS
    })).toEqual({ ...state, emailSuccess: true });
  });

  it('should update the reducer state when unsuccessful', () => {
    expect(resetPasswordReducer(undefined, {
      type: types.PASSWORD_RESET_REQUEST_FAILURE,
      payload: 'error'
    })).toEqual({ ...state, error: 'error' });
  });

  it('should update the reducer state when successful', () => {
    expect(resetPasswordReducer(undefined, {
      type: types.CONFIRM_TOKEN_SUCCESS
    })).toEqual({ ...state, confirmSuccess: true });
  });

  it('should update the reducer state when unsuccessful', () => {
    expect(resetPasswordReducer(undefined, {
      type: types.CONFIRM_TOKEN_FAILURE,
      payload: 'error'
    })).toEqual({ ...state, error: 'error' });
  });

  it('should update the reducer state when successful', () => {
    expect(resetPasswordReducer(undefined, {
      type: types.UPDATE_PASSWORD_SUCCESS,
    })).toEqual({ ...state, updateSuccess: true });
  });

  it('should update the reducer state when unsuccessful', () => {
    expect(resetPasswordReducer(undefined, {
      type: types.UPDATE_PASSWORD_FAILURE,
      payload: 'error'
    })).toEqual({ ...state, error: 'error' });
  });

  it('should change update message state', () => {
    expect(resetPasswordReducer(undefined, {
      type: types.CLEAR_UPDATE_MESSAGE,
    })).toEqual({ ...state, updateSuccess: false });
  });
});
