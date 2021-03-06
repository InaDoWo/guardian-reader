import React from 'react'
import PropTypes from 'prop-types'
import {Well, Col} from 'react-bootstrap'

const PostRow = ({item, thumbnail, title, date, onClickPost}) => (
    <Col xs={6} md={4}>
        <Well>
            <div className="articleTitle" style={{height: 6 + 'em'}}>
                <h3>
                    <a href="#" onClick={e => onClickPost(e, item)}>{title}</a>
                </h3>
            </div>
            <div>
                <p>Posted on {new Date(date).getDate()}/{new Date(date).getMonth() + 1}/{new Date(date).getFullYear()}</p>
            </div>
            <div>
                <a href="#" onClick={e => onClickPost(e, item)}>
                    <img src={thumbnail} alt={title}></img>
                </a>
            </div>
        </Well>
    </Col>
)

PostRow.propTypes = {
    item: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onClickPost: PropTypes.func.isRequired
}

export default PostRow
