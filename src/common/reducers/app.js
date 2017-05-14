import * as ActionTypes from '../ActionTypes'

const initialState = {
  loading: false,
  userMediaAllowed: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER_MEDIA_ALLOWED:
      return {
        ...state,
        userMediaAllowed: action.payload
      }
    default:
      return state
  }
}
