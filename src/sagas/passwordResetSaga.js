import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  passwordResetFailure,
  passwordResetRequestSuccess,
  confirmTokenFailure,
  confirmTokenSuccess,
  updatePasswordFailure,
  updatePasswordSuccess
} from '../actions/passwordReset';

import {
  PASSWORD_RESET_REQUEST,
  CONFIRM_TOKEN_REQUEST,
  UPDATE_PASSWORD_REQUEST
} from '../actionTypes/passwordReset';
import { getResetToken } from '../utilities/auth';

/**
 * Handles the call to the password reset API endpoint
 * @param {object} payload User email
 * @returns {promise} Promise
 */
const resetRequest = payload => (
  axios.post(`${process.env.API_URL}/users/resetpassword`, {
    email: payload
  })
);

/**
 * Handles the call to the confirm password API endpoint
 * @param {object} payload User token
 * @returns {promise} Promise
 */
const confirmPasswordRequest = payload => (
  axios.get(`${process.env.API_URL}/users/resetpassword/${payload}`, {}, {
    headers: {
      'x-access-token': payload
    }
  })
);

/**
 * Handles the call to the update password API endpoint
 * @param {object} payload User email
 * @returns {promise} Promise
 */
const updatePasswordRequest = payload => (
  axios.post(`${process.env.API_URL}/users/updatepassword`, {
    password: payload
  }, {
    headers: {
      'x-access-token': getResetToken()
    }
  })
);

/**
   * Middleware that handles token authentication
   * @param {object} action
   */
function* resetRequestSaga(action) {
  try {
    yield call(resetRequest, action.payload);
    yield put(passwordResetRequestSuccess());
  } catch (error) {
    yield put(passwordResetFailure(error));
  }
}

/**
 * Saga to watch for token authentication requests
 */
export function* watchResetPasswordRequestSaga() {
  yield takeLatest(PASSWORD_RESET_REQUEST, resetRequestSaga);
}

/**
   * Middleware that handles requests to confirm
   * token
   * @param {object} action
   */
function* confirmTokenRequestSaga(action) {
  try {
    yield call(confirmPasswordRequest, action.payload);
    yield put(confirmTokenSuccess());
  } catch (error) {
    yield put(confirmTokenFailure(error));
  }
}

/**
   * Watch saga to watch for password reset requests
   */
export function* watchConfirmTokenRequestSaga() {
  yield takeLatest(CONFIRM_TOKEN_REQUEST, confirmTokenRequestSaga);
}

/**
   * Middleware that handles requests to update password
   * token
   * @param {object} action
   */
function* updatePasswordSaga(action) {
  try {
    yield call(updatePasswordRequest, action.payload);
    yield put(updatePasswordSuccess());
  } catch (error) {
    yield put(updatePasswordFailure(error));
  }
}

/**
     * Watch saga to watch for password update requests
     */
export function* watchUpdatePasswordRequestSaga() {
  yield takeLatest(UPDATE_PASSWORD_REQUEST, updatePasswordSaga);
}
