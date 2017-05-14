import React from 'react'
import { connect } from 'react-redux'

import Message from '../components/Message'

let MessageList = props => {
  const { messages } = props

  const messageElements = messages.map((message, index) => <Message key={index} {...message} />)

  return (
    <div style={{
      padding: 14
    }}>
      {messageElements}
    </div>
  )
}

const mapStateToProps = state => ({
  messages: state.messages.messages
})

MessageList = connect(mapStateToProps)(MessageList)

export default MessageList
