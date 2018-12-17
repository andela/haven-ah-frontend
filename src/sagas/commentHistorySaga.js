import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getToken } from '../utilities/auth';
import { GET_COMMENT_HISTORY } from '../actionTypes/commentHistoryActionTypes';
import {
  commentHistorySuccess,
  commentHistoryFailure
} from '../actions/commentHistoryActions';

const getHistory = (slug, commentId) => axios.get(
  `${process.env.API_URL}/articles/${slug}/comments/${commentId}`,
  {
    headers: {
      'x-access-token': getToken()
    },
  }
);

/**
 * Sends api request to fetch comment hoistory
 * @param {object} action Get history action object
 */
function* commentHistorySaga(action) {
  const { payload: { slug, commentId } } = action;
  try {
    const { data } = yield call(getHistory, slug, commentId);
    yield put(commentHistorySuccess(data.data.editHistory));
  } catch (error) {
    yield put(commentHistoryFailure(error.response.data.message));
  }
}

/**
 * Watches for the get comment history request
 */
export default function* watchCommentHistorySaga() {
  yield takeLatest(GET_COMMENT_HISTORY, commentHistorySaga);
}
