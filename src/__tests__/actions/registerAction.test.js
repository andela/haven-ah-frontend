import {
  registerRequestAction,
  registerSuccessAction,
  registerFailureAction
} from '../../actions/registerAction';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../../actionTypes/registerActionType';

const userData = {
  firstName: 'Sullivan',
  lastName: 'Wisdom',
  userName: 'wizsurlivan',
  email: 'wiztemple@gmail.com',
  password: 'letitgobyjamesbay'
};

describe('Register Action', () => {
  it('should return the correct action', () => {
    expect(registerRequestAction(userData)).toEqual({
      type: REGISTER_REQUEST,
      payload: userData
    });
  });
});
describe('Register Action Success', () => {
  it('should return the correct action', () => {
    expect(registerSuccessAction({ message: 'success' })).toEqual({
      type: REGISTER_SUCCESS,
      payload: 'success'
    });
  });
});
describe('Register Action Failure', () => {
  it('should return the correct action', () => {
    expect(registerFailureAction({ message: 'Bad request' })).toEqual({
      type: REGISTER_FAILURE,
      payload: 'Bad request'
    });
  });
});
