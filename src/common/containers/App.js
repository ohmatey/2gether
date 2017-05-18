import React from 'react'
import { Route } from 'react-router-dom'
import { socketConnect } from 'socket.io-react'

import Chat from './Chat'
import IndexPage from './IndexPage'

class App extends React.Component {
  componentDidMount () {
    const { socket } = this.props


  }

  render () {
    return (
      <div>
        <Route exact path='/' component={IndexPage} />
      </div>
    )
  }
}

export default socketConnect(App)
