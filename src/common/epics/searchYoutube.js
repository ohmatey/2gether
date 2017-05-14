import * as ActionTypes from '../ActionTypes'
import { ajax } from 'rxjs/observable/dom/ajax'
import { searchYouTubeResults, searchYouTubeError } from '../actions'

export default action$ =>
  action$.ofType(ActionTypes.START_YOUTUBE_SEARCH)
    //.map(action => action.payload)
    .switchMap(query => {
      console.log(query)
      return ajax.getJSON(`/api/youtube/search/${query.payload}`)
        .map(res => res.items)
        .map(searchYouTubeResults)
    })
    .catch(searchYouTubeError)
