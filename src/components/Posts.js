import React from 'react'
import PropTypes from 'prop-types'
import PostRow from './PostRow.js'
import { Row } from 'react-bootstrap'

const Posts = ({posts, onClickPost}) => (
  <Row>
    {posts.map((post, i) =>
      <PostRow
        key={i}
        item={i}
        thumbnail={post.fields.thumbnail}
        title={post.webTitle}
        date={post.webPublicationDate}
        onClickPost={onClickPost}/>
    )}
  </Row>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  onClickPost: PropTypes.func.isRequired
}

export default Posts
