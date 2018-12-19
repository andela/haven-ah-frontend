import { all } from 'redux-saga/effects';
import watchHeroArticle from './heroArticleSaga';
import watchTrendingArticles from './trendingArticlesSaga';
import watchGetFeaturedAuthor from './featuredAuthorSaga';
import watchRecentArticles from './recentArticlesSaga';
import watchLoginSaga from './loginSaga';
import watchRegisterSaga from './registerSaga';
import watchGetSingleArticle from './articleThreadSaga';
import { watchFollowUser, watchUnFollowUser } from './followUser';
import { watchLike, watchLove } from './reactionSaga';
import watchPostArticleSaga from './createArticleSaga';
import watchGetComments from './getCommentsSaga';
import watchPostComment from './postCommentSaga';
import watchCommentHistory from './commentHistorySaga';

import { watchBookmarkArticle, watchUnbookmarkArticle }
  from './bookmarkArticleSaga';
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
    watchGetSingleArticle(),
    watchFollowUser(),
    watchUnFollowUser(),
    watchLike(),
    watchLove(),
    watchPostArticleSaga(),
    watchGetComments(),
    watchPostComment(),
    watchBookmarkArticle(),
    watchUnbookmarkArticle(),
    watchCommentHistory()
  ]);
}

export default rootSaga;
