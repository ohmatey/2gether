import express from 'express'
import passport from 'passport'

const router = express.Router()

router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }))

router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/chat',
    failureRedirect: '/'
  })
)

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

export default router
