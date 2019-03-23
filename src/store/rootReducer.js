import {combineReducers} from 'redux';
import posts from '../components/posts/post.reducer';
import articles from '../components/articles/article.reducer';

const rootReducer = combineReducers({
  posts: posts,
  articles: articles
});

export default rootReducer