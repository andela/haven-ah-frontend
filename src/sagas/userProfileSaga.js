import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  USER_PROFILE_REQUEST,
  USER_BOOKMARK_REQUEST,
  EDIT_PROFILE_REQUEST
} from '../actionTypes/userProfileActionType';
import {
  userProfileSuccessAction,
  userProfileFailureAction,
  userBookmarkSuccess,
  userBookmarkFailure,
  editProfileSuccessAction,
  editProfileFailureAction
} from '../actions/userProfileAction';
import { getToken } from '../utilities/auth';

/**
 * Function to make async call to
 * retrieve a user profile
 * @param {string} username
 * @returns {object} promise
 */
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
 * Function to make async call to
 * update a user profile
 * @param {string} username
 * @returns {object} promise
 */
const editUserProfile = ({ username, userData }) => {
  return axios.put(`${process.env.API_URL}/users/${username}`, userData, {
    headers: {
      'x-access-token': getToken()
    }
  });
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

/**
 * Generator function to edit a user profile
 * actions
 * @param {object} action
 */
export function* editUserSaga(action) {
  try {
    const response = yield call(editUserProfile, action.payload);
    yield put(editProfileSuccessAction(response.data.data));
  } catch (error) {
    yield put(editProfileFailureAction(error.message));
  }
}

/**
 * A generator function to watch requests
 * to edit a user profile
 */
export function* watchEditUser() {
  yield takeLatest(EDIT_PROFILE_REQUEST, editUserSaga);
}
