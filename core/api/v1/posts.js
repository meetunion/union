const express = require('express');
const tokenAuth = require('../../auth/token');

const Post = require('../../models/post');

const postsRoutes = express.Router();

postsRoutes.get('/', tokenAuth, (req, res) => {
  Post.fetchAll().then((posts) => {
    res.json(posts.toJSON());
  });
});

module.exports = postsRoutes;
