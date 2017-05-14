import React from 'react'
import { Route } from 'react-router-dom'
import { socketConnect } from 'socket.io-react'

import Chat from './Chat'
import VideoChat from './VideoChat'

class App extends React.Component {
  componentDidMount () {
    const { socket } = this.props


  }

  render () {
    return (
      <div>
        <Route exact path='/video' component={VideoChat} />
        <Route exact path='/video/chat' component={Chat} />
      </div>
    )
  }
}

export default socketConnect(App)
