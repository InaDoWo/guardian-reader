import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectGuardian, fetchPostsIfNeeded, invalidateGuardian, saveInput, selectArticle} from '../actions'
import SearchArticles from '../components/SearchArticles'
import Article from '../components/Article'
import {Grid, Row, Col} from 'react-bootstrap'
import Search from '../components/Search'

class App extends Component {
    static propTypes = {
        selectedGuardian: PropTypes.string,
        selectedArticle: PropTypes.number,
        savedInput: PropTypes.string,
        posts: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedGuardian !== this.props.selectedGuardian) {
            const {dispatch, selectedGuardian} = nextProps
            dispatch(fetchPostsIfNeeded(selectedGuardian))
        }
    }

    handleSearchEntry = e => {
        e.preventDefault();
        const {dispatch, savedInput} = this.props
        dispatch(selectGuardian(savedInput))
    }
    handleInput = input => {
        this.props.dispatch(saveInput(input))
    }
    handleSelection = (e, item) => {
        e.preventDefault();
        this.props.dispatch(selectArticle(item))
    }

    handleRefreshClick = e => {
        e.preventDefault()

        const {dispatch, selectedGuardian} = this.props
        dispatch(invalidateGuardian(selectedGuardian))
        dispatch(fetchPostsIfNeeded(selectedGuardian))
    }

    render() {
        const {posts, isFetching, lastUpdated, selectedArticle} = this.props
        const isEmpty = posts.length === 0
        const articleSelected = selectedArticle !== null
            ? true
            : false
        return (
            <Grid style={{paddingTop: 5 + 'em'}}>
                <Row className="show-grid">
                  <div style={{paddingBottom: 2 + 'em', paddingLeft: 1 + 'em'}}>
                  <h1>Select the topic you are interested in</h1>
                  </div>
                    <Search  onChange={this.handleInput} onSubmit={this.handleSearchEntry}/>
                    <div>
                        <SearchArticles isEmpty={isEmpty} posts={posts} isFetching={isFetching} lastUpdated={lastUpdated} onClick={this.handleRefreshClick} onClickPost={this.handleSelection}/>
                    </div>
                    <Col xs={6} md={6}>
                        <Article posts={posts} selectedArticle={selectedArticle} articleSelected={articleSelected}/>
                    </Col>

                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    const {selectedGuardian, postsByGuardian, savedInput, selectedArticle} = state
    const {isFetching, lastUpdated, items: posts} = postsByGuardian[selectedGuardian] || {
        isFetching: true,
        items: []
    }

    return {
        selectedGuardian,
        posts,
        isFetching,
        lastUpdated,
        savedInput,
        selectedArticle
    }
}

export default connect(mapStateToProps)(App)
