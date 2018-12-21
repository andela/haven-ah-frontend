import {
  REPORT_ARTICLE_REQUEST,
  REPORT_ARTICLE_SUCCESS,
  REPORT_ARTICLE_FAILURE
} from '../../actionTypes/reportArticleActionTypes';
import reducer from '../../reducers/reportArticle';

const initialState = {
  reporting: false,
  message: null,
  error: null
};

describe('Report article reducer', () => {
  it('should retain state if invalid action is sent', () => {
    expect(reducer(undefined, {
      type: 'non-existent'
    })).toEqual(initialState);
  });

  it('should update reporting on request', () => {
    expect(reducer(undefined, {
      type: REPORT_ARTICLE_REQUEST,
      payload: {}
    })).toEqual({
      ...initialState,
      reporting: true
    });
  });

  it('should update the reducer state with success message', () => {
    expect(reducer(undefined, {
      type: REPORT_ARTICLE_SUCCESS,
      payload: 'success'
    })).toEqual({
      ...initialState,
      message: 'success'
    });
  });

  it('should update the reducer state with the error message', () => {
    expect(reducer(undefined, {
      type: REPORT_ARTICLE_FAILURE,
      payload: 'Bad Request'
    })).toEqual({
      ...initialState,
      error: 'Bad Request'
    });
  });
});
