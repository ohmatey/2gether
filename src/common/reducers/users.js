import * as ActionTypes from '../ActionTypes'

const initialState = {
  loading: false,
  records: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.RECIEVE_USER:
      return {
        ...state,
        loading: false,
        records: [...state.records, action.payload]
      }
    case ActionTypes.REMOVE_USER:
      return {
        ...state,
        loading: false,
        //messages: [...state.messages, action.payload]
      }
    case ActionTypes.ADD_USER_ERROR:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
