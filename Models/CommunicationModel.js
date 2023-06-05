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

// const GrammarSchema = mongoose.Schema({
//   chapter: [topic],
// });



const CommunicationModel = mongoose.model("communication", topic);

module.exports = CommunicationModel;
