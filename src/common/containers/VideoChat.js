import React from 'react'
import { socketConnect } from 'socket.io-react'
import { connect } from 'react-redux'

import P2PVideo from './P2PVideo'
import P2PCamera from './P2PCamera'
import UsersList from './UsersList'
import YoutubeVideo from './YoutubeVideo'
import YouTubeSearch from './YouTubeSearch'

import { recieveUser } from '../actions/'

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia

const peer = new window.Peer({key: 'lwjd5qra8257b9', debug: 1})

class VideoChat extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      myId: '',
      peerId: ''
    }

    this.call = this.call.bind(this)
  }

  componentDidMount () {
    const { socket, dispatch } = this.props

    peer.on('open', () => {
      this.setState({ myId: peer.id })
      socket.emit('new-user', peer.id)
    })

    socket.on('new-user', user => {
      dispatch(recieveUser({...user}))
    })

    peer.on('error', console.log)

    peer.on('call', call => {
      this.P2PCamera.startStream()
        .then(stream => {
          this.localStream = stream
          call.on('stream', this.P2PVideo.startStream)
          call.answer(this.localStream)
          this.handleCall(this.localStream, call)
        })
    })
  }

  handleCall (stream, call) {


    const peerId = call.id
    this.setState({peerId})
  }

  call (id) {
    this.P2PCamera.startStream()
      .then(stream => {
        this.localStream = stream

        const call = peer.call(id, this.localStream)
        call.on('stream', this.P2PVideo.startStream)
      })
  }

  render () {
    return (
      <content className='video-chat'>
        <UsersList call={this.call} />
        <YouTubeSearch call={this.call} />
        <P2PCamera ref={node => this.P2PCamera = node} />
        <P2PVideo ref={node => this.P2PVideo = node} />
        <YoutubeVideo />
      </content>
    )
  }
}

export default socketConnect(connect()(VideoChat))
function requestFullScreen(element) {
  // Supports most browsers and their versions.
  var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

  if (requestMethod) { // Native full screen.
      requestMethod.call(element)
  }
}
