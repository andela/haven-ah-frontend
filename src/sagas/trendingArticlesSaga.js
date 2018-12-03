
import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { TRENDING_ARTICLES_REQUEST } from '../actionTypes/trendingActionType';
import {
  trendingArticlesSuccessAction,
  trendingArticlesFailureAction
} from '../actions/trendingArticlesAction';

const fetchTrendingArticles = () => {
  return axios.get(
    'https://haven-ah-backend-staging.herokuapp.com/api/v1/articles'
  );
};

/**
 * The generator function for trending articles saga
 * @param {object} action
 */
export function* trendingArticlesSaga() {
  try {
    const response = yield call(fetchTrendingArticles);
    if (response.data.status !== 200) {
      yield put(trendingArticlesFailureAction(response.data.data.message));
    } else {
      yield put(trendingArticlesSuccessAction(response.data.data.rows));
    }
  } catch (error) {
    yield put(trendingArticlesFailureAction(error.message));
  }
}

/**
 * The generator watches the trendingArticlesSaga for event.
 */
export default function* watchTrendingArticles() {
  yield takeLatest(TRENDING_ARTICLES_REQUEST, trendingArticlesSaga);
}
