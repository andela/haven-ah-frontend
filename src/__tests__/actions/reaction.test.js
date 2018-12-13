import {
  likeAction,
  likeSuccess,
  likeFailure,
  loveAction,
  loveSuccess,
  loveFailure,
} from '../../actions/reactionAction';

import {
  LIKE_REQUEST,
  LIKE_SUCCESS,
  LIKE_FAILURE,
  LOVE_REQUEST,
  LOVE_SUCCESS,
  LOVE_FAILURE,
} from '../../actionTypes/reactionActionTypes';

const slug = 'Xtreme-364728933';

describe('Like Article Action', () => {
  it('should return the correct action', () => {
    expect(likeAction(slug)).toEqual({
      type: LIKE_REQUEST,
      slug,
    });
  });
});
describe('Like Article Action Success', () => {
  it('should return the correct action', () => {
    expect(likeSuccess({ message: 'dummy message' })).toEqual({
      type: LIKE_SUCCESS,
      payload: {
        message: 'dummy message'
      },
    });
  });
});
describe('Like Article Action Failure', () => {
  it('should return the correct action', () => {
    expect(likeFailure({ error: 'Bad request' })).toEqual({
      type: LIKE_FAILURE,
      error: {
        error: 'Bad request'
      },
    });
  });
});

describe('Follow User Action', () => {
  it('should return the correct action', () => {
    expect(loveAction(slug)).toEqual({
      type: LOVE_REQUEST,
      slug,
    });
  });
});
describe('Follow User Action Success', () => {
  it('should return the correct action', () => {
    expect(loveSuccess({ message: 'dummy message' })).toEqual({
      type: LOVE_SUCCESS,
      payload: {
        message: 'dummy message'
      },
    });
  });
});
describe('Follow User Action Failure', () => {
  it('should return the correct action', () => {
    expect(loveFailure({ error: 'Bad request' })).toEqual({
      type: LOVE_FAILURE,
      error: {
        error: 'Bad request'
      },
    });
  });
});
