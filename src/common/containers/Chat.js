import React from 'react'
import { socketConnect } from 'socket.io-react'
import { connect } from 'react-redux'

import MessageList from './MessageList'
import MessageInput from './MessageInput'

class Chat extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <content className='chat'>
        <header className='chat-header'>Chat room</header>

        <content className='chat-body'>
          <MessageList />
        </content>

        <footer className='chat-footer'>
          <MessageInput />
        </footer>
      </content>
    )
  }
}

export default connect()(socketConnect(Chat))
