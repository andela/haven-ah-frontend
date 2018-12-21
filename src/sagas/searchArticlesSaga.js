import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  SEARCH_REQUEST
} from '../actionTypes/searchActionTypes';
import {
  searchSuccessAction,
  searchFailureAction,
} from '../actions/searchAction';

const searchArticle = (keywords, author, tag) => {
  const params = {
    keywords,
    author,
    tag
  };
  return axios.get(`${process.env.API_URL}/articles/search`, { params });
};

/**
 * The worker saga for searching an article
 * @param {object} action
 */
export function* searchArticleSaga(action) {
  try {
    const {
      keywords,
      author,
      tag,
    } = action.payload;
    const response = yield call(() => searchArticle(keywords, author, tag));
    yield put(searchSuccessAction(response.data.data));
  } catch (error) {
    yield put(searchFailureAction(error.response.data.message));
  }
}

/**
 * The watcher generator for a single article request.
 */
export default function* watchSearchArticles() {
  yield takeLatest(SEARCH_REQUEST, searchArticleSaga);
}
