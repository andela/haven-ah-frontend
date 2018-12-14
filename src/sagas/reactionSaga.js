import axios from 'axios';

import { takeLatest, call, put } from 'redux-saga/effects';
import {
  LIKE_REQUEST,
  LOVE_REQUEST,
} from '../actionTypes/reactionActionTypes';
import {
  likeSuccess,
  likeFailure,
  loveSuccess,
  loveFailure,
} from '../actions/reactionAction';


const token = localStorage.getItem('token');

/**
 * Like article
 * @param {string} slug
 * @returns {object} axios API call
*/
const likeArticle = (slug) => {
  return axios.post(`${process.env.API_URL}/articles/${slug}/reactions`,
    {
      reactionType: 'Like',
    },
    {
      headers: {
        'x-access-token': token,
      },
    });
};

/**
 * Like comment
 * @param {string} slug
 * @param { number } commentId
 * @returns {object} axios API call
*/
const likeComment = (slug, commentId) => {
  return axios
    .post(`${
      process.env.API_URL}/articles/${slug}/comments/${commentId}/reactions/`,
    {
      reactionType: 'Like',
    },
    {
      headers: {
        'x-access-token': token,
      },
    });
};

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
      reactionType: 'Love',
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
      reactionType: 'Love',
    },
    {
      headers: {
        'x-access-token': token,
      },
    });
};

/**
 * The generator function for the Like saga
 * @param {object} action
 */
export function* likeSaga(action) {
  try {
    let response;
    if (action.commentId) {
      response = yield call(likeComment, action.slug, action.commentId);
    } else {
      response = yield call(likeArticle, action.slug);
    }
    const { data } = response;
    yield put(likeSuccess(data));
  } catch (error) {
    yield put(likeFailure(error.response.data));
  }
}

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
 * The generator watches the Like Saga for event.
 */
export function* watchLike() {
  yield takeLatest(LIKE_REQUEST, likeSaga);
}

/**
 * The generator watches the Love Saga for event.
 */
export function* watchLove() {
  yield takeLatest(LOVE_REQUEST, loveSaga);
}
