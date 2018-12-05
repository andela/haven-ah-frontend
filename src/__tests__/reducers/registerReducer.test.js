import registerReducer from '../../reducers/registerReducer';
import * as types from '../../actionTypes/registerActionType';


const payload = {
  firstName: 'Sullivan',
  lastName: 'Wisdom',
  userName: 'wizsurlivan',
  email: 'wiztemple@gmail.com',
  password: 'letitgobyjamesbay'
};

const initialState = {
  signingUp: false,
  error: '',
  success: '',
  payload: {}
};

describe('Register user reducer: ', () => {
  it('should have a default state', () => {
    expect(registerReducer(undefined, {
      type: 'non-existent type'
    })).toEqual(initialState);
  });

  it('should update the reducer state', () => {
    expect(registerReducer(undefined, {
      type: types.REGISTER_REQUEST,
      payload,
    })).toEqual({
      ...initialState,
      signingUp: true,
      payload,
    });
  });

  it('should update the register', () => {
    expect(registerReducer(undefined, {
      type: types.REGISTER_SUCCESS,
      payload: 'Signup successful'
    })).toEqual({
      ...initialState,
      success: 'Signup successful',
    });
  });

  it('should add error to register state', () => {
    expect(registerReducer(undefined, {
      type: types.REGISTER_FAILURE,
      payload: 'Bad request'
    })).toEqual({
      ...initialState,
      error: 'Bad request',
    });
  });
});
