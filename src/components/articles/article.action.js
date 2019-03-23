import axios from 'axios';

export const fetchArticles = (slug) => async (dispatch, getState) => {
  return await axios.get(`https://id.techinasia.com/wp-json/techinasia/3.0/posts/${slug}`)
    .then(response => dispatch({
      type: 'ARTICLES_SUCCESS',
      slug,
      response,
    }))
    .catch(error => dispatch({
      type: 'ARTICLES_FAILURE',
      errorMessage: error
    }))
}