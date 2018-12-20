import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  USER_PROFILE_REQUEST,
  USER_BOOKMARK_REQUEST
} from '../actionTypes/userProfileActionType';
import {
  userProfileSuccessAction,
  userProfileFailureAction,
  userBookmarkSuccess,
  userBookmarkFailure
} from '../actions/userProfileAction';
import { getToken } from '../utilities/auth';

// const token = localStorage.getItem('token');
const fetchUserProfile = (username) => {
  let headers = {};
  const token = getToken();
  if (token) {
    headers = {
      headers: {
        'x-access-token': token
      }
    };
  }
  return axios.get(`${process.env.API_URL}/users/${username}`, headers);
};

/**
 * Function to make async call to
 * retrieve a users bookmarked articles
 * @param {string} username
 * @returns {object} promise
 */
const fetchUserBookmarkedArticles = (username) => {
  let headers = {};
  const token = getToken();
  if (token) {
    headers = {
      headers: {
        'x-access-token': token
      }
    };
  }
  return axios
    .get(`${process.env.API_URL}/users/${username}/bookmarks`, headers);
};

/**
 * The generator function for the user Profile saga
 * @param {object} action
 */
export function* userProfileSaga(action) {
  try {
    const response = yield call(fetchUserProfile, action.payload);
    yield put(userProfileSuccessAction(response.data.data));
  } catch (error) {
    yield put(userProfileFailureAction(error.message));
  }
}

/**
 * The generator watches the recent user Profile Saga for event.
 */
export function* watchUserProfile() {
  yield takeLatest(USER_PROFILE_REQUEST, userProfileSaga);
}

/**
 * Generator function to fetch and dispatch
 * actions
 * @param {object} action
 */
export function* userBookmarksSaga(action) {
  try {
    const {
      data: {
        data: {
          bookmarks
        }
      }
    } = yield call(fetchUserBookmarkedArticles, action.payload);
    const userBookmarks = bookmarks.map(bookmark => bookmark.Article);
    yield put(userBookmarkSuccess(userBookmarks));
  } catch (error) {
    yield put(userBookmarkFailure(error));
  }
}

/**
 * A generator function to watch requests
 * to get user bookmarks
 */
export function* watchUserBookmarks() {
  yield takeLatest(USER_BOOKMARK_REQUEST, userBookmarksSaga);
}
