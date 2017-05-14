import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import messages from './messages'
import userVideo from './userVideo'
import app from './app'
import users from './users'
import youtubePlayer from './youtubePlayer'
import youtubeSearch from './youtubeSearch'

export default combineReducers({
  app,
  messages,
  userVideo,
  users,
  youtubePlayer,
  youtubeSearch,
  routing: routerReducer
})
