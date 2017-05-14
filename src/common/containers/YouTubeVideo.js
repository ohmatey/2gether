import React from 'react'
import { connect } from 'react-redux'
import { socketConnect } from 'socket.io-react'

import { pauseYoutubeVideo, setReadyYoutubeVideo, playYoutubeVideo } from '../actions/'
import YouTube from './YouTube'

class YoutubeVideo extends React.Component {
  constructor (props) {
    super(props)

    this.handleOnReady = this.handleOnReady.bind(this)
    this.handleOnPlay = this.handleOnPlay.bind(this)
    this.handleOnPause = this.handleOnPause.bind(this)
  }

  componentDidMount () {
    const { socket, dispatch } = this.props

    socket.on('play-youtube-video', ({
      id
    }) => {
      dispatch(playYoutubeVideo({
        id
      }))
      this.YouTube.internalPlayer.playVideo()
    })

    socket.on('pause-youtube-video', _ => {
      dispatch(pauseYoutubeVideo())
      this.YouTube.internalPlayer.stopVideo()
    })
  }

  handleOnReady () {
    this.props.dispatch(setReadyYoutubeVideo())
  }

  handleOnPlay () {
    const { id, socket } = this.props

    socket.emit('play-youtube-video', {
      id
    })
  }

  handleOnPause () {
    const { socket } = this.props

    socket.emit('pause-youtube-video')
  }

  handleOnEnd () {

  }

  handleOnError () {

  }

  handleOnStateChange () {

  }

  handleOnPlayBackRateChange () {

  }

  handleOnPlaybackQualityChange () {

  }

  render() {
    const { id, dispatch } = this.props

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0
      }
    }

    return (
      <div>
        {this.props.loading && 'loading'}
        <YouTube
          ref={el => {this.YouTube = el}}
          videoId={id}
          onReady={this.handleOnReady}
          onPlay={this.handleOnPlay}
          onPause={this.handleOnPause}
          onEnd={this.handleOnEnd}
          onError={this.handleOnError}
          onStateChange={this.handleOnStateChange}
          onPlaybackRateChange={this.handleOnPlayBackRateChange}
          onPlaybackQualityChange={this.handleOnPlaybackQualityChange}
          opts={opts}
        />
      </div>
    )
  }
}

export default socketConnect(connect(state => ({...state.youtubePlayer}))(YoutubeVideo))
