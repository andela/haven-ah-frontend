import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  featuredAuthorSuccess,
  featuredAuthorFailure
} from '../actions/featuredAuthor';

import {
  FEATURED_AUTHOR_REQUEST
} from '../actionTypes/featuredAuthorActionTypes';


const fetchFeaturedAuthor = () => {
  return axios.get(`${process.env.API_URL}/authors/featured`);
};

/**
 * Middleware to get featured author
 */
function* getFeaturedAuthor() {
  try {
    const response = yield call(fetchFeaturedAuthor);
    if (response.data.data) {
      yield put(featuredAuthorSuccess(response.data.data));
    } else {
      yield put(featuredAuthorFailure(response.data.message));
    }
  } catch (error) {
    yield put(featuredAuthorFailure(error.message));
  }
}


/**
 * Watch saga to watch for get featured author request
 */
export default function* watchGetFeaturedAuthor() {
  yield takeLatest(FEATURED_AUTHOR_REQUEST, getFeaturedAuthor);
}
