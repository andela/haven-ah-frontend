import { all } from 'redux-saga/effects';
import watchHeroArticle from './heroArticleSaga';
import watchTrendingArticles from './trendingArticlesSaga';
import watchGetFeaturedAuthor from './featuredAuthorSaga';
import watchRecentArticles from './recentArticlesSaga';
import watchLoginSaga from './loginSaga';
import watchRegisterSaga from './registerSaga';

/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchHeroArticle(),
    watchTrendingArticles(),
    watchGetFeaturedAuthor(),
    watchRecentArticles(),
    watchLoginSaga(),
    watchRegisterSaga(),
  ]);
}

export default rootSaga;
