import * as ActionTypes from '../ActionTypes'

const initialState = {
  loading: false,
  playing: false,
  paused: false,
  id: 'onaJlEPxdeI'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PLAY_YOUTUBE_VIDEO:
      console.log('start vid', action.payload)
      return {
        ...state,
        loading: false,
        playing: true,
        id: action.payload.id
      }
    case ActionTypes.PAUSE_YOUTUBE_VIDEO:
      return {
        ...state,
        loading: false,
        playing: false,
        paused: false
      }
    case ActionTypes.STOP_YOUTUBE_VIDEO:
      return {
        ...state,
        loading: false,
        playing: false,
        id: ''
      }
    case ActionTypes.SET_YOUTUBE_READY:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
