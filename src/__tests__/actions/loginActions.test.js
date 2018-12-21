import {
  loginRequestAction,
  loginSuccessAction,
  loginFailureAction,
  cleanUp,
} from '../../actions/loginActions';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAN_UP,
} from '../../actionTypes/loginActionType';

describe('Login request action handler', () => {
  it('should return', () => {
    expect(loginRequestAction({})).toEqual({
      type: LOGIN_REQUEST,
      payload: {}
    });
  });
});

describe('Login request success action handler', () => {
  it('should return an object with token payload', () => {
    expect(loginSuccessAction({ token: 'token' })).toEqual({
      type: LOGIN_SUCCESS,
      payload: 'token'
    });
  });
});

describe('Login request failure action handler', () => {
  it('should return an object with error', () => {
    expect(loginFailureAction({ message: 'error' })).toEqual({
      type: LOGIN_FAILURE,
      payload: 'error'
    });
  });
});

describe('Login cleanup action', () => {
  it('should return an object with action type clean up', () => {
    expect(cleanUp()).toEqual({
      type: CLEAN_UP,
    });
  });
});
