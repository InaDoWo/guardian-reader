import { combineReducers } from 'redux'
import {
  SELECT_GUARDIAN, INVALIDATE_GUARDIAN,
  REQUEST_POSTS, RECEIVE_POSTS, SAVE_INPUT, SELECT_ARTICLE
} from '../actions'

const savedInput = (state = '', action) => {
  switch (action.type) {
    case SAVE_INPUT:
      return action.guardian
    default:
      return state
  }
}

const selectedGuardian = (state = '', action) => {
  switch (action.type) {
    case SELECT_GUARDIAN:
      return action.guardian
    default:
      return state
  }
}

const selectedArticle = (state = null, action) => {
  switch (action.type) {
    case SELECT_ARTICLE:
    return action.guardian
  default:
    return state
  }
}

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_GUARDIAN:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const postsByGuardian = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_GUARDIAN:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.guardian]: posts(state[action.guardian], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByGuardian,
  selectedGuardian,
  savedInput,
  selectedArticle
})

export default rootReducer
