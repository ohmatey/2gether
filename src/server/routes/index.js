import express from 'express'

import auth from './auth'
import youtube from './youtube'
import { isLoggedIn } from '../utils/isLoggedIn'

const router = express.Router()

router.use(auth)
router.use(youtube)

router.get('/chat', isLoggedIn, (req, res) => res.render('home'))
router.get('/video', isLoggedIn, (req, res) => res.render('home'))
router.get('*', (req, res) => res.render('home'))

router.get((err, req, res) => {
  throw new Error(err)
})

export default router
