import React from 'react'
import PropTypes from 'prop-types'
import Posts from './Posts'
import {Col, Row} from 'react-bootstrap'

const SearchArticles = ({
    isEmpty,
    posts,
    isFetching,
    lastUpdated,
    onChange,
    onSubmit,
    onClick,
    onClickPost
}) => (
    <div>
      <Row className="show-grid">
        <Col xs={6} md={6} style={{textAlign: 'right'}}>
            <p>
                {lastUpdated && <span>
                    Last updated at {new Date(lastUpdated).toLocaleTimeString()}. {' '}
                </span>
}
                {!isFetching && <a href="#" onClick={onClick}>
                    Refresh
                </a>
}
            </p>
        </Col>
        <Col xs={6} md={6}></Col>
        </Row>
        <Col xs={6} md={6}>

            {isEmpty
                ? (isFetching
                    ? <h2></h2>
                    : <h2>Empty.</h2>)
                : <div style={{
                    opacity: isFetching
                        ? 0.5
                        : 1
                }}>
                    <Posts posts={posts} onClickPost={onClickPost}/>
                </div>
}
        </Col>
    </div>
)

SearchArticles.propTypes = {
    isEmpty: PropTypes.bool,
    posts: PropTypes.array,
    isFetching: PropTypes.bool,
    lastUpdated: PropTypes.number,
    onClick: PropTypes.func.isRequired,
    onClickPost: PropTypes.func.isRequired
}

export default SearchArticles
