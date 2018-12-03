import { combineReducers } from 'redux';
import heroArticleReducer from './heroArticleReducer';

export default combineReducers({
  heroArticle: heroArticleReducer,
});
