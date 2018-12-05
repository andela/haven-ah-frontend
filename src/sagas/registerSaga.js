import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { REGISTER_REQUEST } from '../actionTypes/registerActionType';
import {
  registerSuccessAction,
  registerFailureAction
} from '../actions/registerAction';

/**
 * Handles the call to signup endpoint
 * @param {*} payload User data
 * @returns {promise}
 */
const register = payload => (
  axios.post(`${process.env.API_URL}/users/signup`, payload));


/**
 * The generator function for the register saga
 * @param {object} action
 */
export function* registerSaga(action) {
  try {
    const response = yield call(register, action.payload);
    yield put(registerSuccessAction(response.data));
  } catch (error) {
    yield put(registerFailureAction(error.response.data));
  }
}

/**
 * The generator watches the registerSaga for event.
 */
export default function* watchRegisterSaga() {
  yield takeLatest(REGISTER_REQUEST, registerSaga);
}
