import React from 'react'

class P2PVideo extends React.Component {
  constructor (props) {
    super(props)

    this.startStream = this.startStream.bind(this)
  }

  startStream (stream) {
    this.video.src = window.URL.createObjectURL(stream)
    this.video.muted = true
    this.video.onloadedmetadata = e => this.video.play()
  }

  render () {
    return (
      <div style={{
        position: 'fixed',
        left: 20,
        top: 20
      }}>
        <video style={{
          width: 200
        }} ref={el => { this.video = el }} />
      </div>
    )
  }
}

export default P2PVideo
