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
const like = (slug) => {
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

const love = (slug) => {
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
    const response = yield call(like, action.slug);
    if (response.data.status !== 200) {
      yield put(likeFailure(response.data.data.message));
    } else {
      yield put(likeSuccess(response.data));
    }
  } catch (error) {
    yield put(likeFailure(error.message));
  }
}

/**
 * The generator function for the Love saga
 * @param {object} action
 */
export function* loveSaga(action) {
  try {
    const response = yield call(love, action.slug);
    if (response.data.status !== 200) {
      yield put(loveFailure(response.data.data.message));
    } else {
      yield put(loveSuccess(response.data));
    }
  } catch (error) {
    yield put(loveFailure(error.message));
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
