const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const YoutubeSchema  = new mongoose.Schema({

    title: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    }

  }, SchemeConfig);

  module.exports.Youtube = mongoose.model('Youtube', YoutubeSchema);