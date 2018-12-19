import { getCommentHistory, commentHistorySuccess, commentHistoryFailure } from '../../actions/commentHistoryActions';
import {
  GET_COMMENT_HISTORY,
  COMMENT_HISTORY_SUCCESS,
  COMMENT_HISTORY_FAILURE
} from '../../actionTypes/commentHistoryActionTypes';

describe('Get comment history', () => {
  it('should return a payload with the slug and commentId', () => {
    expect(getCommentHistory({ slug: 'slug', commentId: 5 })).toEqual({
      type: GET_COMMENT_HISTORY,
      payload: { slug: 'slug', commentId: 5 }
    });
  });
});

describe('Comment history success action', () => {
  const history = [
    {
      id: 2,
      oldComment: 'Hello there'
    },
    {
      id: 7,
      oldComment: 'Hello  again to you'
    }
  ];

  it('should return the comment histories', () => {
    expect(commentHistorySuccess(history)).toEqual({
      type: COMMENT_HISTORY_SUCCESS,
      payload: history
    });
  });
});

describe('Comment history failute action', () => {
  it('should return an error on failure', () => {

    expect(commentHistoryFailure('Bad request')).toEqual({
      type: COMMENT_HISTORY_FAILURE,
      payload: 'Bad request'
    });
  });
});
