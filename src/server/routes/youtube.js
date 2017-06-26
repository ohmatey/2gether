import express from 'express'
import passport from 'passport'
import YouTube from 'youtube-node'

const router = express.Router()
const youTube = new YouTube()

youTube.setKey('AIzaSyDTGhC6zWHIr4qcSW5Rx_ygHLI1kgmKY5Y')

router.get('/api/youtube/search/:keyword', (req, res) => {
  youTube.search(req.params.keyword, 10, (error, result) => {
    if (error) {
      console.log(error)
    } else {
      res.json(result)
    }
  })
})

export default router
