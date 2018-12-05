import { all } from 'redux-saga/effects';

import watchHeroArticle from './heroArticleSaga';
import watchGetFeaturedAuthor from './featuredAuthorSaga';

/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchHeroArticle(),
    watchGetFeaturedAuthor(),
  ]);
}

export default rootSaga;
