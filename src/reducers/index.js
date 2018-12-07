import { combineReducers } from 'redux';
import heroArticleReducer from './heroArticleReducer';
import trendingArticlesReducer from './trendingArticlesReducer';
import featuredAuthorReducer from './featuredAuthor';
import recentArticlesReducer from './recentArticlesReducer';
<<<<<<< HEAD
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
=======
>>>>>>> ft(articles): Get single article
import singleArticleReducer from './articleThread';


export default combineReducers({
  heroArticle: heroArticleReducer,
  trendingArticles: trendingArticlesReducer,
  featuredAuthor: featuredAuthorReducer,
  recentArticles: recentArticlesReducer,
<<<<<<< HEAD
  loginUser: loginReducer,
  registerUser: registerReducer,
=======
>>>>>>> ft(articles): Get single article
  articleThread: singleArticleReducer
});
