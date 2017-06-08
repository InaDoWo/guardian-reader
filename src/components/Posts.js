import React from 'react'
import PropTypes from 'prop-types'
import PostRow from './PostRow.js'

const Posts = ({posts, onClickPost}) => (
  <div>
    {posts.map((post, i) =>
      <PostRow
        key={i}
        item={i}
        thumbnail={post.fields.thumbnail}
        title={post.webTitle}
        date={post.webPublicationDate}
        onClickPost={onClickPost}/>
    )}
  </div>  
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  onClickPost: PropTypes.func.isRequired
}

export default Posts
