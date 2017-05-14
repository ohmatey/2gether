import { combineEpics } from 'redux-observable'
import addMessage from './addMessage'
import startVideo from './startVideo'
import stopVideo from './stopVideo'
import searchYouTube from './searchYouTube'

export default combineEpics(
  addMessage,
  startVideo,
  stopVideo,
  searchYouTube
)
