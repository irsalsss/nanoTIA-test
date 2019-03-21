import React from 'react';
import Media from 'react-bootstrap/Media';
import Image from 'react-bootstrap/Image';
import Moment from 'react-moment';


const Post = ({ post }) => {
  return (
    <Media className="hoverable">
      <Media.Body>
        <h5 className='post-list__title' dangerouslySetInnerHTML={{__html: post.title}}></h5>
        <p>{post.seo.description}</p>
        <hr />
        <div className='post-list__author'>
          <Image src={post.author.avatar_url} width={28} height={28} roundedCircle />
          <div className='post-list__author_right'>
            <p className="post-list__author_right_red">{post.author.display_name}</p>
            <p><Moment fromNow className="post-list__author_right_grey">{post.date}</Moment></p>
          </div>          
        </div>
      </Media.Body>
      <img
        width={310}
        height={175}
        className="align-self-start ml-3"
        src={post.seo.image}
        alt="Generic placeholder"
      />
    </Media>
  )
}

export default Post
