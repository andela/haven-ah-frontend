import axios from 'axios';

import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FOLLOW_USER_REQUEST,
  UNFOLLOW_USER_REQUEST,
} from '../actionTypes/followUserActionTypes';
import {
  followUserSuccess,
  followUserFailure,
  unFollowUserSuccess,
  unFollowUserFailure,
} from '../actions/followUser';


const token = localStorage.getItem('token');
const followUser = (username) => {
  return axios.post(`${process.env.API_URL}/profiles/${username}/follow`,
    {},
    {
      headers: {
        'x-access-token': token,
      }
    });
};

const unFollowUser = (username) => {
  return axios.delete(`${process.env.API_URL}/profiles/${username}/follow`, {
    headers: {
      'x-access-token': token,
    }
  });
};

/**
 * The generator function for the followUser saga
 * @param {object} action
 */
export function* followUserSaga(action) {
  try {
    const response = yield call(followUser, action.username);
    yield put(followUserSuccess(response.data));
  } catch (error) {
    yield put(followUserFailure(error.response.data));
  }
}

/**
 * The generator function for the unFollowUser saga
 * @param {object} action
 */
export function* unFollowUserSaga(action) {
  try {
    const response = yield call(unFollowUser, action.username);
    yield put(unFollowUserSuccess(response.data));
  } catch (error) {
    yield put(unFollowUserFailure(error.response.data));
  }
}

/**
 * The generator watches the followUserSaga for event.
 */
export function* watchFollowUser() {
  yield takeLatest(FOLLOW_USER_REQUEST, followUserSaga);
}

/**
 * The generator watches the unFollowUserSaga for event.
 */
export function* watchUnFollowUser() {
  yield takeLatest(UNFOLLOW_USER_REQUEST, unFollowUserSaga);
}
