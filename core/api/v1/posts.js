const express = require('express');
const tokenAuth = require('../../auth/token');

const Union = require('../../models/union');
const Post = require('../../models/post');

const postsRoutes = express.Router();

postsRoutes.get('/', tokenAuth, (req, res) => {
  Post.fetchAll().then((posts) => {
    res.json(posts.toJSON());
  });
});

postsRoutes.post('/', tokenAuth, (req, res) => {
  Union.query({ orderBy: ['id', 'asc'] }).fetch().then((union) => {
    Post.forge({
      union_id: union.id,
      title: req.body.title,
      content: req.body.content,
    })
      .save()
      .then((post) => {
        res.json(post.toJSON());
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
});

postsRoutes.get('/:id', tokenAuth, (req, res) => {
  Post.forge({ id: req.params.id })
    .fetch()
    .then((post) => {
      res.json(post.toJSON());
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

postsRoutes.put('/:id', tokenAuth, (req, res) => {
  Post.forge({ id: req.params.id })
    .fetch()
    .then((post) => {
      post.save({
        union_id: post.get('union_id'),
        title: req.body.title || post.get('title'),
        content: req.body.content || post.get('content'),
      })
        .then(() => {
          res.json({ message: 'Post successfully updated' });
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

postsRoutes.delete('/:id', tokenAuth, (req, res) => {
  Post.forge({ id: req.params.id })
    .fetch()
    .then((post) => {
      post.destroy()
        .then(() => {
          res.json({ message: 'Post successfully destroyed' });
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = postsRoutes;
