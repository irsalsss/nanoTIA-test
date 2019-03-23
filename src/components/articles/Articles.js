import React from 'react'
import Image from 'react-bootstrap/Image';
import Moment from 'react-moment';

const Articles = ({ article }) => {
  return (
    <div className="article-container">
      <div className="article-header">
        <p className='article__categories'>{article.categories[0].parent}</p>
        <h1 dangerouslySetInnerHTML={{__html: article.title}} className="article-heading"></h1>
        <div className='article__author'>
          <Image src={article.author.avatar_url} width={40} height={40} roundedCircle className="image-circle" />
          <div className='article__author_right'>
            <p className="article__author_right_red">{article.author.display_name}</p>
            <p><Moment fromNow className="article__author_right_grey">{article.date}</Moment></p>
          </div>          
        </div>
      </div>

      <img className="article-image" src={article.featured_image.source} alt={article.title + '.jpg'} />
      <div className='article-content' dangerouslySetInnerHTML={{__html: article.content}}></div>
    </div>
  )
}

export default Articles
