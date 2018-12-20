import axios from 'axios';

import { takeLatest, call, put } from 'redux-saga/effects';
import {
  LOVE_REQUEST,
} from '../actionTypes/reactionActionTypes';
import {
  loveSuccess,
  loveFailure,
} from '../actions/reactionAction';
import LOVE from '../utilities/reactionConstants';

const token = localStorage.getItem('token');

/**
 * Love Comment
 * @param {string} slug
 * @param { number } commentId
 * @returns {object} axios API call
*/
const loveComment = (slug, commentId) => {
  return axios
    .post(`${
      process.env.API_URL}/articles/${slug}/comments/${commentId}/reactions/`,
    {
      reactionType: LOVE,
    },
    {
      headers: {
        'x-access-token': token,
      },
    });
};

/**
 * Love article
 * @param {string} slug
 * @returns {object} axios API call
*/
const loveArticle = (slug) => {
  return axios.post(`${process.env.API_URL}/articles/${slug}/reactions`,
    {
      reactionType: LOVE,
    },
    {
      headers: {
        'x-access-token': token,
      },
    });
};

/**
 * The generator function for the Love saga
 * @param {object} action
 */
export function* loveSaga(action) {
  try {
    let response;
    if (action.commentId) {
      response = yield call(loveComment, action.slug, action.commentId);
    } else {
      response = yield call(loveArticle, action.slug);
    }
    const { data } = response;
    yield put(loveSuccess(data));
  } catch (error) {
    yield put(loveFailure(error.response.data));
  }
}

/**
 * The generator watches the Love Saga for event.
 */
export default function* watchLove() {
  yield takeLatest(LOVE_REQUEST, loveSaga);
}
