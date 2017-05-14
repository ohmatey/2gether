import 'rxjs'

import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import { SocketProvider } from 'socket.io-react'
import io from 'socket.io-client'

import configureStore from '../common/configureStore'
import App from '../common/containers/App'

require('./css/styles.css')

// const initialState = window.__INITIAL_STATE__
const store = configureStore()
const customHistory = createBrowserHistory()
const history = syncHistoryWithStore(
  customHistory,
  store
)

const socket = io().connect('http://localhost')

const rootEl = document.getElementById('__root')

ReactDom.render(
  <Provider store={store}>
    <SocketProvider socket={socket}>
      <Router history={history}>
        <App />
      </Router>
    </SocketProvider>
  </Provider>,
  rootEl
)
