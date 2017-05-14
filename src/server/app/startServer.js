import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import session from 'express-session'
import redisClient from 'redis'
import connectRedis from 'connect-redis'
import passportFacebook from 'passport-facebook'

import authConfig from '../config/auth'
import ioRoutes from '../lib/io'

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const ExpressPeerServer = require('peer').ExpressPeerServer

const RedisStore = connectRedis(session)
const redis = redisClient.createClient()
const FacebookStrategy = passportFacebook.Strategy
const { facebookAuth } = authConfig

const startServer = ({
  port,
  routes,
  views,
  publicFolderDir
}) => new Promise((resolve, reject) => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(cookieParser('secretysecret'))

  const redisStore = new RedisStore({
    host: 'localhost',
    port: 6397,
    client: redis
  })
  app.use(session({
    secret: 'secretysecret',
    saveUninitialized: true,
    resave: false,
    store: redisStore
  }))

  app.set('views', views.viewEngineDir)
  app.set('view engine', views.viewEngine)
  app.use('/public', express.static(publicFolderDir))

  const authFbLogin = (accessToken, refreshToken, profile, done) => done(null, profile)
  const fbStrategy = new FacebookStrategy(facebookAuth, authFbLogin)
  passport.use(fbStrategy)

  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((id, done) => {
    done(null, id)
  })

  app.use(passport.initialize())
  app.use(passport.session())

  app.use(ioRoutes(app))

  app.use(routes)

  http.listen(3001, _ => console.log('listening on *:3001'))

  app.use('/peer', ExpressPeerServer(app, {
    debug: true
  }))

  app.on('connection', id => console.log('someone joined', id))
  app.on('disconnect', id => console.log('someone left', id))
})

io.on('connection', socket => {
  console.log('connected')
  socket.on('new-user', peerId => {
    socket.broadcast.emit('new-user', {
      peerId
    })
  })

  socket.on('play-youtube-video', video => {
    console.log('play-youtube-video', video)
    socket.broadcast.emit('play-youtube-video', video)
  })

  socket.on('pause-youtube-video', video => {
    console.log('pause-youtube-video', video)
    socket.broadcast.emit('pause-youtube-video', video)
  })
})

export default startServer
