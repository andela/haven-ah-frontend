import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  BOOKMARK_ARTICLE_REQUEST,
  UNBOOKMARK_ARTICLE_REQUEST,
} from '../actionTypes/bookmarkArticleActionTypes';
import {
  bookmarkArticleSuccess,
  bookmarkArticleFailure,
  unbookmarkArticleSuccess,
  unbookmarkArticleFailure,
} from '../actions/bookmarkArticle';

const username = localStorage.getItem('username');
const token = localStorage.getItem('token');

const bookmarkArticle = (slug) => {
  return axios
    .post(`${process.env.API_URL}/users/ucheg6/bookmarks/${slug}`, {}, {
      headers: {
        'x-access-token': token,
      }
    });
};
const unbookmarkArticle = (slug, id) => {
  return axios
    .delete(
      `${process.env.API_URL}/users/${username}/bookmarks/${slug}/${id}`, {
        headers: {
          'x-access-token': token,
        }
      }
    );
};
/**
 * The generator function for the bookmarkArticle saga
 * @param {object} action
 */
export function* bookmarkArticleSaga(action) {
  try {
    const response = yield call(bookmarkArticle, action.payload);
    if (response.data.status !== 201) {
      yield put(bookmarkArticleFailure(response.data.data.message));
    } else {
      yield put(bookmarkArticleSuccess(response.data));
    }
  } catch (error) {
    yield put(bookmarkArticleFailure(error.message));
  }
}
/**
 * The generator function for the unbookmarkArticle saga
 * @param {object} action
 */
export function* unbookmarkArticleSaga(action) {
  try {
    const response = yield call(unbookmarkArticle, action.payload.slug, action.payload.id);
    if (response.data.status !== 202) {
      yield put(unbookmarkArticleFailure(response.data.data.message));
    } else {
      yield put(unbookmarkArticleSuccess(response.data));
    }
  } catch (error) {
    yield put(unbookmarkArticleFailure(error.message));
  }
}
/**
 * The generator watches the bookmarkArticleSaga for event.
 */
export function* watchBookmarkArticle() {
  yield takeLatest(BOOKMARK_ARTICLE_REQUEST, bookmarkArticleSaga);
}
/**
 * The generator watches the unbookmarkArticleSaga for event.
 */
export function* watchUnbookmarkArticle() {
  yield takeLatest(UNBOOKMARK_ARTICLE_REQUEST, unbookmarkArticleSaga);
}
