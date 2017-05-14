window.AudioContext = window.AudioContext || window.webkitAudioContext

const getUserMedia = ({
  audio,
  video
}) =>
  new Promise((resolve, reject) => {
    const hdVideo = {
      optional: [],

      // capture super-hd stream!
      mandatory: {
        minWidth: 1280,
        minHeight: 720,
        maxWidth: 1920,
        maxHeight: 1080,
        minAspectRatio: 1.77
      }
    }
    const videoConfig = video ? hdVideo : false

    const config = {
      audio,
      videoConfig
    }

    navigator.getUserMedia(config, stream => resolve(stream), _ => {})
  })

export default getUserMedia
