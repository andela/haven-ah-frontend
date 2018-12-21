import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getToken } from '../utilities/auth';
import {
  reportArticleSuccess, reportArticleFailure
} from '../actions/reportArticle';
import {
  REPORT_ARTICLE_REQUEST
} from '../actionTypes/reportArticleActionTypes';

const postReport = ({ slug, complaintBody }) => {
  return axios.post(`${process.env.API_URL}/articles/${slug}/complaints`,
    complaintBody, {
      headers: {
        'x-access-token': getToken()
      }
    });
};

/**
 * Report article saga
 * @param {object} action Report action
 */
function* reportArticleSaga(action) {
  try {
    const { data } = yield call(postReport, action.payload);
    yield put(reportArticleSuccess(data.message));
  } catch (error) {
    yield put(reportArticleFailure(error.response.data.message));
  }
}

/**
 * Watches for the request to report an article
 */
export default function* watchReportArticleSaga() {
  yield takeLatest(REPORT_ARTICLE_REQUEST, reportArticleSaga);
}
