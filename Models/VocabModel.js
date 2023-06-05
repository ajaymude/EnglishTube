const mongoose = require("mongoose");

const topic = mongoose.Schema({
  topic:String,
  videos:[
    {
      title:String,
      desc:String,
      link:String
    }
  ]
});

const VocabModal = mongoose.model("vocab", topic);

module.exports = VocabModal;
