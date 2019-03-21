import {combineReducers} from 'redux';
import posts from '../components/posts/post.reducer';

const rootReducer = combineReducers({
  posts: posts
});

export default rootReducer