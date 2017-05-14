import React from 'react'
import { connect } from 'react-redux'
import { socketConnect } from 'socket.io-react'

export class MessageInput extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      message: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleMessageOnchange = this.handleMessageOnchange.bind(this)
  }

  handleSubmit (e) {
    const { socket } = this.props
    const { message } = this.state

    e.preventDefault()
    console.log(message)

    socket.emit('new-message', message)
    this.setState({message: ''})
  }

  handleMessageOnchange (e) {
    const message = e.target.value
    this.setState({message})
  }

  render () {
    const { message } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleMessageOnchange} value={message} />
        <button type='submit'>-></button>
      </form>
    )
  }
}

const ConnectedMessageInput = connect(state => state)(MessageInput)

export default socketConnect(ConnectedMessageInput)
