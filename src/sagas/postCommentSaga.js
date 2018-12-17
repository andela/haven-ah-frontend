import { call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { POST_COMMENT_REQUEST } from '../actionTypes/articleThreadActionTypes';
import { getToken } from '../utilities/auth';
import {
  postCommentSuccess,
  postCommentFailure
} from '../actions/articleThread';

const postComment = payload => (
  axios.post(`${process.env.API_URL}/articles/${payload.slug}/comments`,
    {
      body: payload.comment
    },
    {
      headers: {
        'x-access-token': getToken(),
      },
    })
);

/**
 * Post comment saga
 * @param {object} action Post comment action object
 */
function* postCommentSaga(action) {
  try {
    const { data } = yield call(postComment, action.payload);
    yield put(postCommentSuccess(data.data));
  } catch (error) {
    yield put(postCommentFailure(error.response.data.message));
  }
}

/**
 * Watch post comment request and call post comment saga
 */
export default function* watchPostComment() {
  yield takeLatest(POST_COMMENT_REQUEST, postCommentSaga);
}
