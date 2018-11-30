import { combineReducers } from 'redux';
import heroArticleReducer from './heroArticleReducer';
import featuredAuthorReducer from './featuredAuthor';

export default combineReducers({
  heroArticle: heroArticleReducer,
  featuredAuthor: featuredAuthorReducer,
});
