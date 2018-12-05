import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  loginSuccessAction,
  loginFailureAction,
} from '../actions/loginActions';

import { LOGIN_REQUEST } from '../actionTypes/loginActionType';
import setToken, { setUsername } from '../utilities/auth';

/**
 * Handles the call to the login API endpoint
 * @param {object} payload User data
 * @returns {promise} Promise
 */
const login = payload => (
  axios.post(`${process.env.API_URL}/users/signin`, payload)
);

/**
   * Middleware that handles login requests
   * @param {objetc} action Login action function
   */
function* loginSaga(action) {
  try {
    const { data } = yield call(login, action.payload);
    yield put(loginSuccessAction(data.data));

    setUsername(data.message);
    setToken(data.data.token);
  } catch (error) {
    yield put(loginFailureAction(error.response.data));
  }
}

/**
 * Watch saga to watch for login requests
 */
export default function* watchLoginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
