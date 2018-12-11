import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { USER_PROFILE_REQUEST } from '../actionTypes/userProfileActionType';
import {
  userProfileSuccessAction,
  userProfileFailureAction
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
export default function* watchUserProfile() {
  yield takeLatest(USER_PROFILE_REQUEST, userProfileSaga);
}
