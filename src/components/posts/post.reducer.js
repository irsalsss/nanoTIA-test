const initialState = {
  isFetching: true,
  posts: [],
  page: 1,
  errorMessage: ''
};

const posts = (state = initialState, action) => {
  switch(action.type){
    case 'POSTS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        posts: action.response.data.posts
      }
    case 'POSTS_FAILURE': 
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage,
      }
    case 'NEXT_POSTS_SUCCESS':
      return {
        ...state,
        posts: state.posts.concat(action.response.data.posts),
        page: action.page
      }
    case 'NEXT_POSTS_FAILURE': 
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}

export default posts;