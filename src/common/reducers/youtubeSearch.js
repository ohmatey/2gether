import * as ActionTypes from '../ActionTypes'

const initialState = {
  loading: false,
  results: [],
  showHide: true
}

export default (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case ActionTypes.TOGGLE_YOUTUBE_SEARCH:
      return {
        ...state,
        showHide: !state.showHide
      }
    case ActionTypes.START_YOUTUBE_SEARCH:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.RECIEVE_YOUTUBE_SEARCH:
      return {
        ...state,
        loading: false,
        results: action.payload
      }
    case ActionTypes.ERROR_YOUTUBE_SEARCH:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
