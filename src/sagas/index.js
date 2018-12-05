import { all } from 'redux-saga/effects';
import watchHeroArticle from './heroArticleSaga';
import watchTrendingArticles from './trendingArticlesSaga';
import watchGetFeaturedAuthor from './featuredAuthorSaga';
import watchRecentArticles from './recentArticlesSaga';

/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchHeroArticle(),
    watchTrendingArticles(),
    watchGetFeaturedAuthor(),
    watchRecentArticles(),

  ]);
}

export default rootSaga;
