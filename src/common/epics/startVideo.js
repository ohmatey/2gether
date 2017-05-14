import * as ActionTypes from '../ActionTypes'
// import { ajax } from 'rxjs/observable/dom/ajax'
import { startMyVideo } from '../actions'

export default action$ =>
  action$.ofType(ActionTypes.PLAY_MY_VIDEO)
    .map(startMyVideo)
