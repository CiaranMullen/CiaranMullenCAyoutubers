const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Youtube   = require('../models/Youtube').Youtube;

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
      .model('Youtube')
      .find({})
      .then (youtubers => res.json(youtubers))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single youtube by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Youtube')
    .findOne({_id: req.params.id})
    .then (youtube => res.json(youtube))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new youtube
router.post('/', (req, res) => {
  return new Youtube({
    title     : req.body.title,
  })
  .save()
  .then (youtube => Youtube.populate(youtube, {path: '_id'}))
  .then (youtube => res.json(youtube))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a topic with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Youtube
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a youtube
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Youtube
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        title  : req.body.title,
      }},
      {new: true}
    )
    .then (youtube => Youtube.populate(youtube, {path: '_id'}))
    .then (youtube => res.json(youtube))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;