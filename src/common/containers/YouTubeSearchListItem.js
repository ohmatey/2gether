import React from 'react'
import { connect } from 'react-redux'
import { socketConnect } from 'socket.io-react'

import { searchYouTube } from '../actions/'

class YouTubeSearchListItem extends React.Component {
  constructor (props) {
    super(props)

    this.watch = this.watch.bind(this)
  }

  watch () {
    const { id } = this.props

    this.props.socket.emit('play-youtube-video', {
      id: id.videoId
    })
  }

  render () {
    const { snippet } = this.props

    return (
      <div>
        {snippet.title}

        <button onClick={this.watch}>Watch</button>
      </div>
    )
  }
}

export default socketConnect(connect()(YouTubeSearchListItem))
