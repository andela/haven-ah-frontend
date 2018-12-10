import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  ARTICLE_THREAD_REQUEST
} from '../actionTypes/articleThreadActionTypes';
import {
  fetchArticleSuccess,
  fetchArticleFailure,
} from '../actions/articleThread';

const fetchArticle = (slug) => {
  const token = localStorage.getItem('token');
  let headers = {};
  if (token) {
    headers = {
      headers: {
        'x-access-token': token
      }
    };
  }
  return axios.get(`${process.env.API_URL}/articles/${slug}`, headers);
};

/**
 * The worker saga for fetching a single article
 * @param {object} action
 */
export function* articleThreadSaga(action) {
  try {
    const response = yield call(() => fetchArticle(action.payload));
    if (response.data.status !== 200) {
      yield put(fetchArticleFailure(response.data.data.message));
    } else {
      yield put(fetchArticleSuccess(response.data.data));
    }
  } catch (error) {
    yield put(fetchArticleFailure(error.message));
  }
}

/**
 * The watcher generator for a single article request.
 */
export default function* watchArticleThread() {
  yield takeLatest(ARTICLE_THREAD_REQUEST, articleThreadSaga);
}
