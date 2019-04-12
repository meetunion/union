const express = require('express');
const tokenAuth = require('../../auth/token');

const Comment = require('../../models/comment');

const commentsRoutes = express.Router();

commentsRoutes.get('/', tokenAuth, (req, res) => {
  Comment.fetchAll().then((comments) => {
    res.json(comments);
  });
});

commentsRoutes.post('/', tokenAuth, (req, res) => {
  Comment.forge({
    post_id: req.body.post_id,
    user_id: req.body.user_id,
    title: req.body.title,
    content: req.body.content,
  })
    .save()
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

commentsRoutes.get('/:id', tokenAuth, (req, res) => {
  Comment.forge({ id: req.params.id })
    .fetch()
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

commentsRoutes.put('/:id', tokenAuth, (req, res) => {
  Comment.forge({ id: req.params.id })
    .fetch()
    .then((comment) => {
      comment.save({
        title: req.body.title || comment.get('title'),
        content: req.body.content || comment.get('content'),
      })
        .then(() => {
          res.json({ message: 'Comment successfully updated' });
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

commentsRoutes.delete('/:id', tokenAuth, (req, res) => {
  Comment.forge({ id: req.params.id })
    .fetch()
    .then((comment) => {
      comment.destroy()
        .then(() => {
          res.json({ message: 'Comment successfully destroyed' });
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = commentsRoutes;
