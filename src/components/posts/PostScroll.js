import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { BarLoader } from 'react-spinners';

import tia from '../../assets/tia.png';
import { fetchPosts, fetchNextPosts } from './post.action';
import Post from './Post';

class PostScroll extends Component {

  handleScroll = (e) => {
    const bottom = e.target.scrollingElement.scrollHeight - e.target.scrollingElement.scrollTop === e.target.scrollingElement.clientHeight;
    if (bottom) {
      this.props.fetchNextPosts(this.props.posts.page + 1);
    }
  }

  componentDidMount(){
   this.props.fetchPosts();
   window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { posts, isFetching } = this.props.posts;
    return (
      <div>
        { isFetching && 
        <div className='sweet-loading'>
          <img src={tia} alt='techinasia-logo' />
          <BarLoader
            sizeUnit={"px"}
            width={200}
            height={5}
            color={'#E10000'}
            loading={isFetching}
            />
        </div> 
        }
        { posts.map((post, index) => {
          return (
            <Post post={post} onScroll={this.handleScroll} key={index} />
          )}
        )}      
        { this.props.length > 20 && 
        <div className='sweet-loading'>
          <BarLoader
            sizeUnit={"px"}
            width={200}
            height={5}
            color={'#E10000'}
            loading={isFetching}
            />
        </div> 
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchPosts: fetchPosts,
      fetchNextPosts: fetchNextPosts
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScroll)


