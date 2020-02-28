const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const YoutuberSchema  = new mongoose.Schema({

    title: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
    genre: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
      subs: {
      type      : int,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
    
  }, SchemeConfig);

  module.exports.Youtuber = mongoose.model('Youtuber', YoutuberSchema);