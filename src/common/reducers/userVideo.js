import * as ActionTypes from '../ActionTypes'

const initialState = {
  loading: false,
  playing: false,
  src: '',
  inited: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PLAY_MY_VIDEO:
      console.log('play vid')
      return {
        ...state,
        loading: true,
        inited: true
      }
    case ActionTypes.START_MY_VIDEO:
      console.log('start vid', action.payload)
      return {
        ...state,
        loading: false,
        playing: true,
        src: action.payload.src
      }
    case ActionTypes.STOP_MY_VIDEO:
      return {
        ...state,
        loading: false,
        playing: false,
        src: ''
      }
    default:
      return state
  }
}
