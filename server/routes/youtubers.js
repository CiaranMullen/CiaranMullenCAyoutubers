const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Youtuber   = require('../models/Youtuber').Youtuber;

/**
 * Functionality for this route:
 *  C   POST    /Youtubers/        Create a new Youtube
 *  R   GET     /Youtubers         Gets an array of all Youtubers
 *  R   GET     /Youtubers/:id     Get a single Youtube, by ID
 *  U   PUT     /Youtubers/:id     Update a single Youtube, by id
 *  D   DELETE  /Youtubers/:id     Delete a single Youtube, by ID
 */

// GET an array of all Youtubers
router.get('/', (req, res) => {
    return mongoose
      .model('Youtuber')
      .find({})
      .then (youtubers => res.json(youtubers))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single youtuber by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Youtuber')
    .findOne({_id: req.params.id})
    .then (youtuber => res.json(youtuber))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new youtuber
router.post('/', (req, res) => {
  return new Youtuber({
    title     : req.body.title,
    genre     : req.body.genre,
    subs     : req.body.subs,
  })
  .save()
  .then (youtuber => Youtuber.populate(youtuber, {path: '_id'}))
  .then (youtuber => res.json(youtuber))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a topic with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Youtuber
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a youtuber
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Youtuber
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        title  : req.body.title,
        genre  : req.body.genre,
        subs     : req.body.subs,
      }},
      {new: true}
    )
    .then (youtuber => Youtuber.populate(youtuber, {path: '_id'}))
    .then (youtuber => res.json(youtuber))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;