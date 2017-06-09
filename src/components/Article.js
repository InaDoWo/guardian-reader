import React from 'react'
import PropTypes from 'prop-types'
import {Well, Row, Col} from 'react-bootstrap'

const Article = ({posts, selectedArticle, articleSelected, clickBack}) => (

    <div>
      <Row style={{ paddingTop: 33 + 'px'}}></Row>
        <Well style={{ marginRight: 20 + '%'}}>
            <div>
                <h4><a href='#' onClick={e => clickBack(e)}> &#8592; back to article list</a></h4>
            </div>
            <Well style={{ marginRight: 8 + 'em', marginBottom: 2 + 'em', backgroundColor:'white'}}>
                <Row>
                    <Col xs={7} md={7}>
                        <div>
                            <img src={posts[selectedArticle].fields.thumbnail} alt={posts[selectedArticle].webTitle}/>
                        </div>
                    </Col>
                    <Col xs={5} md={5}>
                        <div>
                            <h3>{posts[selectedArticle].webTitle}</h3>
                        </div>
                        <div>
                            <p>Posted on {new Date(posts[selectedArticle].webPublicationDate).getDate()}/{new Date(posts[selectedArticle].webPublicationDate).getMonth() + 1}/{new Date(posts[selectedArticle].webPublicationDate).getFullYear()}</p>
                        </div>
                    </Col>

                </Row>
            </Well>
            <div style={{ marginRight: 4 + 'em'}} dangerouslySetInnerHTML={{
                __html: posts[selectedArticle].fields.body
            }}/>

        </Well>
    </div>

)

Article.propTypes = {
    posts: PropTypes.array.isRequired,
    selectedArticle: PropTypes.number,
    articleSelected: PropTypes.bool.isRequired,
    clickBack: PropTypes.func.isRequired
}

export default Article
