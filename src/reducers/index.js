import { combineReducers } from 'redux';
import heroArticleReducer from './heroArticleReducer';
import trendingArticlesReducer from './trendingArticlesReducer';
import featuredAuthorReducer from './featuredAuthor';
import recentArticlesReducer from './recentArticlesReducer';


export default combineReducers({
  heroArticle: heroArticleReducer,
  trendingArticles: trendingArticlesReducer,
  featuredAuthor: featuredAuthorReducer,
  recentArticles: recentArticlesReducer,
});
