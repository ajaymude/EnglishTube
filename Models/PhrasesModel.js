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

const PhrasesModal = mongoose.model("phrases", topic);

module.exports = PhrasesModal;
