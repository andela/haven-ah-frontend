import { all } from 'redux-saga/effects';
import watchHeroArticle from './heroArticleSaga';
import watchGetFeaturedAuthor from './featuredAuthorSaga';
import watchTrendingArticles from './trendingArticlesSaga';


/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchHeroArticle(),
    watchGetFeaturedAuthor(),
    watchTrendingArticles(),
  ]);
}

export default rootSaga;
