export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_GUARDIAN = 'SELECT_GUARDIAN'
export const INVALIDATE_GUARDIAN = 'INVALIDATE_GUARDIAN'
export const SAVE_INPUT = 'SAVE_INPUT'
export const SELECT_ARTICLE = 'SELECT_ARTICLE'

export const selectGuardian = guardian => ({
  type: SELECT_GUARDIAN,
  guardian
})

export const saveInput = guardian => ({
  type: SAVE_INPUT,
  guardian
})

export const selectArticle = guardian => ({
  type: SELECT_ARTICLE,
  guardian
})

export const invalidateGuardian = guardian => ({
  type: INVALIDATE_GUARDIAN,
  guardian
})

export const requestPosts = guardian => ({
  type: REQUEST_POSTS,
  guardian
})

export const receivePosts = (guardian, json) => ({
  type: RECEIVE_POSTS,
  guardian,
  posts: json.response.results.map(child => child),
  receivedAt: Date.now()
})

const fetchPosts = guardian => dispatch => {
  dispatch(requestPosts(guardian))
  return fetch(`https://content.guardianapis.com/search?q=${guardian}&api-key=ae471d40-7f28-4b6e-9f78-19ed4c2276c5&show-fields=thumbnail,body`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(guardian, json)))
}

const shouldFetchPosts = (state, guardian) => {
  const posts = state.postsByGuardian[guardian]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = guardian => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), guardian)) {
    return dispatch(fetchPosts(guardian))
  }
}
