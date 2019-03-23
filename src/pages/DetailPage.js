import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BarLoader } from 'react-spinners';

import Articles from '../components/articles/Articles'
import { fetchArticles } from '../components/articles/article.action';
import tia from '../assets/tia.png';


class DetailPage extends Component {

  state = {
    articles: []
  }

  componentDidMount(){
    let slug = this.props.match.params.slug
    this.props.fetchArticles(slug)
    window.scrollTo(0, 0)
  }

  render(){
    // console.log(this.props.articles)
    const { loading, articles } = this.props.articles
    return(
      <div className="detail-page">
        { loading && 
          <div className='sweet-loading'>
            <img src={tia} alt='techinasia-logo' />
            <BarLoader
              sizeUnit={"px"}
              width={200}
              height={5}
              color={'#E10000'}
              loading={loading}
              />
          </div> 
        }

        { articles.map((article, index) => {
          return (
            <Articles article={article} key={index} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators (
    {
      fetchArticles: fetchArticles
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (DetailPage)
