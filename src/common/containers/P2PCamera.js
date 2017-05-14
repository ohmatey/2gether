import React from 'react'

class P2PCamera extends React.Component {
  constructor (props) {
    super(props)

    this.startStream = this.startStream.bind(this)
    this.stopStream = this.stopStream.bind(this)
  }

  startStream () {
    const video = this.video
    return new Promise((resolve, reject) =>
      getUserMedia(video).then(stream => {

        if (!stream.stop && stream.getTracks) {
          stream.stop = function () {
            this.getTracks().forEach(track => track.stop())
          }
        }

        this.stream = stream
        video.src = window.URL.createObjectURL(stream)
        video.muted = true
        video.onloadedmetadata = e => {
          video.play()
          resolve(stream)
        }
      }))
  }

  stopStream (e) {
    this.stream.stop()
  }

  render () {
    return (
      <div style={{
        position: 'fixed',
        right: 20,
        top: 100
      }}>
        <video style={{
          width: 200
        }} ref={el => { this.video = el }} />
      </div>
    )
  }
}

export default P2PCamera

const getUserMedia = video =>
  new Promise((resolve, reject) => {
    const config = {
      audio: true,
      video: true
    }

    navigator.getUserMedia(config, stream => resolve(stream), err => reject(err))
  })
