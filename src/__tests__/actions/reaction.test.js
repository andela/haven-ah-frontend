import {
  loveAction,
  loveSuccess,
  loveFailure,
} from '../../actions/reactionAction';

import {
  LOVE_REQUEST,
  LOVE_SUCCESS,
  LOVE_FAILURE,
} from '../../actionTypes/reactionActionTypes';

const slug = 'Xtreme-364728933';

describe('Love Article Action', () => {
  it('should return the correct action', () => {
    expect(loveAction(slug)).toEqual({
      type: LOVE_REQUEST,
      slug,
    });
  });
});
describe('love Action Success', () => {
  it('should return the correct action', () => {
    expect(loveSuccess({ message: 'dummy message' })).toEqual({
      type: LOVE_SUCCESS,
      payload: {
        message: 'dummy message'
      },
    });
  });
});
describe('Love Action Failure', () => {
  it('should return the correct action', () => {
    expect(loveFailure({ error: 'Bad request' })).toEqual({
      type: LOVE_FAILURE,
      error: {
        error: 'Bad request'
      },
    });
  });
});
