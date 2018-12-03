import { all } from 'redux-saga/effects';

import watchHeroArticle from './heroArticleSaga';

/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchHeroArticle(),
  ]);
}

export default rootSaga;
