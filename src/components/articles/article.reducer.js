const initialState = {
  loading: true,
  articles: [],
  slug: '',
  errorMessage: ''
}

const articles = (state = initialState, action) => {
  switch(action.type){
    case 'ARTICLES_SUCCESS':
      return {
        ...state,
        articles: action.response.data.posts,
        loading: false,
        slug: action.slug,
      }
    case 'ARTICLES_FAILURE':
      return {
        ...state,
        loading: true,
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}

export default articles