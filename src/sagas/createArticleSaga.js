import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  createArticleFailure,
  createArticleSuccess
} from '../actions/createArticle';

import { getToken } from '../utilities/auth';

import { CREATE_ARTICLE_REQUEST } from '../actionTypes/createArticle';

/**
 * Handles the call to the post article route
 * @param {object} payload Article data
 * @returns {promise} Promise
 */
const postArticle = payload => (
  axios.post(`${process.env.API_URL}/articles`, payload, {
    headers: {
      'x-access-token': getToken()
    }
  })
);

/**
   * Saga worker to dispatch sucess or failure actions
   * @param {object} action type and payload
   */
function* createArticleWorker(action) {
  try {
    const response = yield call(postArticle, action.payload);
    if (response.data.status === 201) {
      const { data } = response.data;
      const newArticle = data.newArticle || data;
      yield put(createArticleSuccess(newArticle.slug));
    } else {
      yield put(createArticleFailure('Article could not be posted.'));
    }
  } catch (error) {
    yield put(createArticleFailure('Article could not be posted.'));
  }
}

/**
 * Watcher for post article requests
 */
export default function* watchPostArticleSaga() {
  yield takeLatest(CREATE_ARTICLE_REQUEST, createArticleWorker);
}
