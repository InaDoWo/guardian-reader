import React from 'react'
import PropTypes from 'prop-types'
import {Well} from 'react-bootstrap'


const Article = ({posts, selectedArticle, articleSelected}) => (

    <div>
        {articleSelected ?
          <Well>
            <Well>
            <div>
                <h3>{posts[selectedArticle].webTitle}</h3>
            </div>
              <div>
                  <p>Posted on {new Date(posts[selectedArticle].webPublicationDate).getDate()}/{new Date(posts[selectedArticle].webPublicationDate).getMonth() + 1}/{new Date(posts[selectedArticle].webPublicationDate).getFullYear()}</p>
              </div>
              <div>
                <img src={posts[selectedArticle].fields.thumbnail} alt={posts[selectedArticle].webTitle}/>
              </div>
              </Well>
                <div dangerouslySetInnerHTML={{ __html: posts[selectedArticle].fields.body }} />

          </Well> : <div></div>}
    </div>


)

Article.propTypes = {
  posts: PropTypes.array.isRequired,
  selectedArticle: PropTypes.number,
  articleSelected: PropTypes.bool.isRequired
}

export default Article
