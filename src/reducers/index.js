import { combineReducers } from 'redux';
import heroArticleReducer from './heroArticleReducer';
import featuredAuthorReducer from './featuredAuthor';
import trendingArticlesReducer from './trendingArticlesReducer';

export default combineReducers({
  heroArticle: heroArticleReducer,
  featuredAuthor: featuredAuthorReducer,
  trendingArticles: trendingArticlesReducer,
});
