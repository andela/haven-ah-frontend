import {
  userProfileAction,
  userProfileSuccessAction,
  userProfileFailureAction
} from '../../actions/userProfileAction';

import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE
} from '../../actionTypes/userProfileActionType';

describe('User profile action', () => {
  it('should return the predefined action', () => {
    expect(userProfileAction()).toEqual({
      type: USER_PROFILE_REQUEST,
    });
  });
});
describe('Fetch article Success ation', () => {
  it('should return the correct action type and payload', () => {
    expect(userProfileSuccessAction({ profile: 'user profile' })).toEqual({
      type: USER_PROFILE_SUCCESS,
      payload: {
        profile: 'user profile'
      },
    });
  });
});
describe('Fetch user profile failure action', () => {
  it('should return the correct action type and payload', () => {
    expect(userProfileFailureAction({ error: 'Bad response' })).toEqual({
      type: USER_PROFILE_FAILURE,
      payload: {
        error: 'Bad response'
      },
    });
  });
});
