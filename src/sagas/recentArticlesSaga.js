import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { RECENT_ARTICLES_REQUEST } from '../actionTypes/recentArticlesType';
import {
  recentArticlesFailureAction,
  recentArticlesSuccessAction,
} from '../actions/recentArticlesAction';

const fetchRecentArticles = () => {
  return axios.get(
    `${process.env.API_URL}/articles/?limit=6`
  );
};

/**
 * The generator function for the recent Articles saga
 * @param {object} action
 */
export function* recentArticlesSaga() {
  try {
    const response = yield call(fetchRecentArticles);
    if (response.data.status !== 200) {
      yield put(recentArticlesFailureAction(response.data.data.message));
    } else {
      yield put(recentArticlesSuccessAction(response.data.data.rows));
    }
  } catch (error) {
    yield put(recentArticlesFailureAction(error.message));
  }
}

/**
 * The generator watches the recent Articles Saga for event.
 */
export default function* watchRecentArticles() {
  yield takeLatest(RECENT_ARTICLES_REQUEST, recentArticlesSaga);
}
