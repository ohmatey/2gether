import * as ActionTypes from '../ActionTypes'
// import { ajax } from 'rxjs/observable/dom/ajax'
// import { receiveUsers } from '../actions'

export default action$ =>
  action$.ofType(ActionTypes.STOP_MY_VIDEO)
    .filter(action => console.log('stop video', action))
