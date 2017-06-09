import React from 'react'
import PropTypes from 'prop-types'
import Posts from './Posts'
import { Row } from 'react-bootstrap'

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
      {!isEmpty ?
      <Row className="show-grid">
        <div style={{textAlign: 'right', paddingRight: 2 + 'em'}}>
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
        </div>
        </Row>
        :<Row className="show-grid"></Row>
        }
        <div >

            {isEmpty
                ? (isFetching
                    ? <h2></h2>
                    : <h2>Sorry, no news for this topic. Maybe try another search?</h2>)
                : <div style={{
                    opacity: isFetching
                        ? 0.5
                        : 1
                }}>
                    <Posts posts={posts} onClickPost={onClickPost}/>
                </div>
}
        </div>
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
