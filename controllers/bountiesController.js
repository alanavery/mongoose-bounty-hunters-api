const router = require('express').Router();

const models = require('../models');

router.get('/', (req, res) => {
  models.Bounty.find().then((bounties) => {
    res.status(200).json({ bounties });
  });
});

router.get('/:id', (req, res) => {
  models.Bounty.findOne({ _id: req.params.id }).then((bounty) => {
    res.status(200).json({ bounty });
  });
});

router.post('/', (req, res) => {
  models.Bounty.create(req.body)
    .then((bounty) => {
      res.status(204).json({ bounty });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put('/:id', (req, res) => {
  res.send('This is the PUT /bounties/:id route.');
});

router.delete('/:id', (req, res) => {
  res.send('This is the DELETE /bounties/:id route.');
});

module.exports = router;
