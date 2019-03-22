import axios from 'axios';

// Fetch Post API
export const fetchPosts = (endpoint) => async (dispatch, getState) => {
   return await axios.get('https://id.techinasia.com/wp-json/techinasia/3.0/posts/?page=1')
    .then(response => dispatch({
      type: 'POSTS_SUCCESS',
      endpoint,
      response
    }))
    .catch(error => dispatch({
      type: 'POSTS_FAILURE',
      errorMessage: error
    }))
}

// Fetch Post API for React Infinite Scroll
export const fetchNextPosts = (page) => async (dispatch, getState) => {
  return await axios.get(`https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=${page}`)
    .then(response => dispatch({
      type: 'NEXT_POSTS_SUCCESS',
      page: page + 1,
      response,
    }))
    .catch(error => dispatch({
      type: 'NEXT_POSTS_FAILURE',
      errorMessage: error
    }))
}
