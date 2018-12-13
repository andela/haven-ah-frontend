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
    const { data } = yield call(like, action.slug);
    if (data.status !== 201 && data.status !== 200) {
      yield put(likeFailure(data.message));
    } else {
      yield put(likeSuccess(data));
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
    const { data } = yield call(love, action.slug);
    if (data.status !== 201 && data.status !== 200) {
      yield put(loveFailure(data.message));
    } else {
      yield put(loveSuccess(data));
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
