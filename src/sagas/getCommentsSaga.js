import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  getCommentsSuccess,
  getCommentsFailure,
} from '../actions/articleThread';
import { GET_COMMENTS_REQUEST } from '../actionTypes/articleThreadActionTypes';
import { getToken } from '../utilities/auth';

const getComments = (slug) => {
  let headers = {};
  const token = getToken();
  if (token) {
    headers = {
      headers: {
        'x-access-token': token
      }
    };
  }
  return axios.get(`${process.env.API_URL}/articles/${slug}/comments`, headers);
};


/**
 * Saga to handle requests to get comments
 * @param {object} action Action containing article slug to get comments for
 */
function* getCommentsSaga(action) {
  try {
    const {
      data:
      { data: { comments } }
    } = yield call(getComments, action.payload);

    yield put(getCommentsSuccess(comments));
  } catch (error) {
    yield put(getCommentsFailure(error.response.data));
  }
}

/**
 * Watch saga watches for requests to get comments
 */
export default function* watchGetCommentsSaga() {
  yield takeLatest(GET_COMMENTS_REQUEST, getCommentsSaga);
}
