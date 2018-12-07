import { all } from 'redux-saga/effects';
import watchHeroArticle from './heroArticleSaga';
import watchTrendingArticles from './trendingArticlesSaga';
import watchGetFeaturedAuthor from './featuredAuthorSaga';
import watchRecentArticles from './recentArticlesSaga';
<<<<<<< HEAD
import watchLoginSaga from './loginSaga';
import watchRegisterSaga from './registerSaga';
=======
>>>>>>> ft(articles): Get single article
import watchGetSingleArticle from './articleThreadSaga';

/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchHeroArticle(),
    watchTrendingArticles(),
    watchGetFeaturedAuthor(),
    watchRecentArticles(),
<<<<<<< HEAD
    watchLoginSaga(),
    watchRegisterSaga(),
=======
>>>>>>> ft(articles): Get single article
    watchGetSingleArticle()
  ]);
}

export default rootSaga;
