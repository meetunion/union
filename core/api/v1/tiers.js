const express = require('express');
const tokenAuth = require('../../auth/token');

const Union = require('../../models/union');
const Tier = require('../../models/tier');

const tiersRoutes = express.Router();

tiersRoutes.get('/', tokenAuth, (req, res) => {
  Tier.fetchAll().then((tiers) => {
    res.json(tiers.toJSON());
  });
});

tiersRoutes.post('/', tokenAuth, (req, res) => {
  Union.query({ orderBy: ['id', 'asc'] }).fetch().then((union) => {
    Tier.forge({
      union_id: union.id,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image_url: req.body.image_url,
    })
      .save()
      .then((tier) => {
        res.json(tier.toJSON());
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
});

tiersRoutes.get('/:id', tokenAuth, (req, res) => {
  Tier.forge({ id: req.params.id })
    .fetch()
    .then((tier) => {
      res.json(tier.toJSON());
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

tiersRoutes.put('/:id', tokenAuth, (req, res) => {
  Tier.forge({ id: req.params.id })
    .fetch()
    .then((tier) => {
      tier.save({
        union_id: tier.get('union_id'),
        title: req.body.title || tier.get('title'),
        description: req.body.description || tier.get('description'),
        price: req.body.price || tier.get('price'),
        image_url: req.body.image_url || tier.get('image_url'),
      })
        .then(() => {
          res.json({ message: 'Tier successfully updated' });
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    });
});

tiersRoutes.delete('/:id', tokenAuth, (req, res) => {
  Tier.forge({ id: req.params.id })
    .fetch()
    .then((tier) => {
      tier.destroy()
        .then(() => {
          res.json({ message: 'Tier successfully destroyed' });
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    });
});

module.exports = tiersRoutes;
