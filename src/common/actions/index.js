import * as ActionTypes from '../ActionTypes'

export const sendMessageRequest = message => ({
  type: ActionTypes.ADD_MESSAGE_REQUEST,
  payload: message
})

export const sendMessageSuccess = message => ({
  type: ActionTypes.ADD_MESSAGE_SUCCESS,
  payload: message
})

export const updateUserMediaAllowed = allowed => ({
  type: ActionTypes.UPDATE_USER_MEDIA_ALLOWED,
  payload: allowed
})

export const playMyVideo = opts => ({
  type: ActionTypes.PLAY_MY_VIDEO,
  payload: opts
})

export const startMyVideo = opts => ({
  type: ActionTypes.START_MY_VIDEO,
  payload: opts
})

export const stopMyVideo = opts => ({
  type: ActionTypes.STOP_MY_VIDEO,
  payload: opts
})

export const playYoutubeVideo = video => ({
  type: ActionTypes.PLAY_YOUTUBE_VIDEO,
  payload: video
})

export const pauseYoutubeVideo = video => ({
  type: ActionTypes.PAUSE_YOUTUBE_VIDEO,
  payload: video
})

export const stopYoutubeVideo = video => ({
  type: ActionTypes.STOP_YOUTUBE_VIDEO,
  payload: video
})

export const setReadyYoutubeVideo = _ => ({
  type: ActionTypes.SET_YOUTUBE_READY
})

export const recieveUser = user => ({
  type: ActionTypes.RECIEVE_USER,
  payload: user
})

export const searchYouTube = query => ({
  type: ActionTypes.START_YOUTUBE_SEARCH,
  payload: query
})

export const searchYouTubeResults = results => ({
  type: ActionTypes.RECIEVE_YOUTUBE_SEARCH,
  payload: results
})

export const searchYouTubeError = error => ({
  type: ActionTypes.ERROR_YOUTUBE_SEARCH,
  payload: error
})
