import { combineReducers } from 'redux';
import heroArticleReducer from './heroArticleReducer';
import trendingArticlesReducer from './trendingArticlesReducer';
import featuredAuthorReducer from './featuredAuthor';
import recentArticlesReducer from './recentArticlesReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import singleArticleReducer from './articleThread';
import followUserReducer from './followUser';
import reactionReducer from './reactionReducer';
import createArticleReducer from './createArticle';
import bookmarkArticleReducer from './boomarkArticle';


export default combineReducers({
  heroArticle: heroArticleReducer,
  trendingArticles: trendingArticlesReducer,
  featuredAuthor: featuredAuthorReducer,
  recentArticles: recentArticlesReducer,
  loginUser: loginReducer,
  registerUser: registerReducer,
  articleThread: singleArticleReducer,
  following: followUserReducer,
  reaction: reactionReducer,
  createArticle: createArticleReducer,
  bookmarkArticle: bookmarkArticleReducer
});
