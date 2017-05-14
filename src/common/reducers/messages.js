import * as ActionTypes from '../ActionTypes'

const initialState = {
  loading: false,
  messages: []
}

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ActionTypes.ADD_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.payload]
      }
    case ActionTypes.ADD_MESSAGE_ERROR:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
