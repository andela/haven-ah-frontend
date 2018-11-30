import axios from 'axios';

import { takeLatest, call, put } from 'redux-saga/effects';
import { HERO_ARTICLE_REQUEST } from '../actionTypes/heroActionType';
import {
  heroArticleFailureAction,
  heroArticleSuccessAction,
} from '../actions/heroArticleAction';

const fetchHeroArticle = () => {
  return axios.get(`${process.env.API_URL}/articles/featured`);
};

/**
 * The generator function for the hero article saga
 * @param {object} action
 */
export function* heroArticleSaga() {
  try {
    const response = yield call(fetchHeroArticle);
    if (response.data.status !== 200) {
      yield put(heroArticleFailureAction(response.data.data.message));
    } else {
      yield put(heroArticleSuccessAction(response.data.data));
    }
  } catch (error) {
    yield put(heroArticleFailureAction(error.message));
  }
}

/**
 * The generator watches the heroArticleSaga for event.
 */
export default function* watchHeroArticle() {
  yield takeLatest(HERO_ARTICLE_REQUEST, heroArticleSaga);
}
