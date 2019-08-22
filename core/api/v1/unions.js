import express from 'express'
import tokenAuth from '../../auth/token'
import Union from '../../models/union'

const unionRoutes = express.Router()

// We're only dealing with a single Union right now so it should always
// be referring to the first instance.

// Get first union
unionRoutes.get('/', (req, res) => {
  Union.query({ orderBy: ['id', 'asc'] })
    .fetch()
    .then((union) => {
      res.json(union)
    })
})

// Update union information
unionRoutes.put('/', tokenAuth, (req, res) => {
  Union.query({ orderBy: ['id', 'asc'] })
    .fetch()
    .then((union) => {
      union
        .save({
          title: req.body.title || union.get('title'),
          description: req.body.description || union.get('description'),
          url: req.body.url || union.get('url'),
          profile_picture_url:
            req.body.profile_picture_url || union.get('profile_picture_url'),
          cover_image_url:
            req.body.cover_image_url || union.get('cover_image_url'),
          about: req.body.about || union.get('about'),
          facebook_url: req.body.facebook_url || union.get('facebook_url'),
          instagram_url: req.body.instagram_url || union.get('instagram_url'),
          twitter_url: req.body.twitter_url || union.get('twitter_url'),
          youtube_url: req.body.youtube_url || union.get('youtube_url'),
          google_analytics_id:
            req.body.google_analytics_id || union.get('google_analytics_id'),
          discord_url: req.body.discord_url || union.get('discord_url'),
          eth_address: req.body.discord_url || union.get('eth_address'),
        })
        .then(() => {
          res.json({ message: 'Union successfully updated' })
        })
        .catch((err) => {
          res.status(500).json({ error: err.message })
        })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

export default unionRoutes
