import * as ActionTypes from '../ActionTypes'
// import { ajax } from 'rxjs/observable/dom/ajax'
// import { receiveUsers } from '../actions'

export default action$ =>
  action$.ofType(ActionTypes.ADD_MESSAGE_REQUEST)
    .filter(action => console.log(action))
