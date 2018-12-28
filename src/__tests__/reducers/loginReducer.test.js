import loginReducer from '../../reducers/loginReducer';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAN_UP,
} from '../../actionTypes/loginActionType';


describe('Login reducer', () => {
  it('should return initial state if an undefined action is passed', () => {
    expect(loginReducer(undefined, { type: 'UNDEFINED_TYPE' })).toEqual({
      loggingIn: false,
      error: '',
      token: '',
      payload: {}
    });
  });

  it('should return a state on login request', () => {
    expect(loginReducer(undefined, {
      type: LOGIN_REQUEST,
      payload: {},
    })).toEqual({
      loggingIn: true,
      error: '',
      token: '',
      payload: {}
    });
  });

  it('should update the state on login success', () => {
    expect(loginReducer(undefined, {
      type: LOGIN_SUCCESS,
      payload: 'token',
    })).toEqual({
      loggingIn: false,
      error: '',
      token: 'token',
      payload: {}
    });
  });

  it('should update the state on login failure', () => {
    expect(loginReducer(undefined, {
      type: LOGIN_FAILURE,
      payload: 'error',
    })).toEqual({
      loggingIn: false,
      error: 'error',
      token: '',
      payload: {}
    });
  });

  it('should revert to innitial state', () => {
    expect(loginReducer(undefined, {
      type: CLEAN_UP,
    })).toEqual({
      loggingIn: false,
      error: '',
      token: '',
      payload: {}
    });
  });
});
