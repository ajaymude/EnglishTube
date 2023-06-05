const GrammarModel = require("../Models/GrammarModel");
const VocabModal = require("../Models/VocabModel");
const PhrasesModal = require("../Models/PhrasesModel");
const CommunicationModel = require("../Models/CommunicationModel");

const AddToGrammar = async (req, res) => {
  try {
    const { section, chapter, title, desc, link } = req.body;
    console.log(section, chapter, title, desc, link);

    if ((await section) == "grammar") {
      const upd = await GrammarModel.updateOne(
        { topic: chapter },
        { $push: { videos: { title, desc, link } } }
      );
      res.status(200).send({ msg: "post class", upd });
    } else if (section == "vocab") {
      const upd = await VocabModal.updateOne(
        { topic: chapter },
        { $push: { videos: { title, desc, link } } }
      );
      res.status(200).send({ msg: "post class", upd });
    } else if (section == "phrases") {
      const upd = await PhrasesModal.updateOne(
        { topic: chapter },
        { $push: { videos: { title, desc, link } } }
      );
      res.status(200).send({ msg: "post class", upd });
    } else if (section == "communication") {
      const upd = await CommunicationModel.updateOne(
        { topic: chapter },
        { $push: { videos: { title, desc, link } } }
      );
      res.status(200).send({ msg: "post class", upd });
    }
  } catch (error) {
    console.log("data is not saved", error);
  }
};

const getGrammarData = async (req, res) => {
  try {
    const { topic, chapter } = req.params;
    console.log("33", topic, chapter);
    if (topic == "grammar") {
      const data = await GrammarModel.findOne({ topic: chapter });
      res.send({ msg: "get data", data });
    } else if (topic == "vocab") {
      const data = await VocabModal.findOne({ topic: chapter });
      res.send({ msg: "get data", data });
    } else if (topic == "phrases") {
      const data = await PhrasesModal.findOne({ topic: chapter });
      res.send({ msg: "get data", data });
    } else if (topic == "communication") {
      const data = await CommunicationModel.findOne({ topic: chapter });
      res.send({ msg: "get data", data });
    }
  } catch (error) {
    console.log(error);
  }
};

const createSection = async (req, res) => {
  try {
    const { section, chapter, title, desc, link } = req.body;
    console.log("11", section, chapter);

    if ((await section) == "grammar") {
      const isexist = await GrammarModel.findOne({ topic: chapter });
      if (!isexist) {
        const gdata = await GrammarModel.create({
          topic: chapter,
          videos: {
            title,
            desc,
            link,
          },
        });
        res.status(200).send({ msg: "post classess ", gdata });
      } else {
        return res.send("already exist");
      }
    } else if (section == "vocab") {
      const isexist = await VocabModal.findOne({ topic: chapter });
      if (!isexist) {
        const gdata = await VocabModal.create({
          topic: chapter,
          videos: {
            title,
            desc,
            link,
          },
        });
        res.status(200).send({ msg: "post classess ", gdata });
      } else {
        return res.send("already exist");
      }
    } else if (section == "phrases") {
      const isexist = await PhrasesModal.findOne({ topic: chapter });
      if (!isexist) {
        const gdata = await PhrasesModal.create({
          topic: chapter,
          videos: {
            title,
            desc,
            link,
          },
        });
        res.status(200).send({ msg: "post classess ", gdata });
      } else {
        return res.send("already exist");
      }
      
    }else if (section == "communication") {
      const isexist = await CommunicationModel.findOne({ topic: chapter });
      if (!isexist) {
        const gdata = await CommunicationModel.create({
          topic: chapter,
          videos: {
            title,
            desc,
            link,
          },
        });
        res.status(200).send({ msg: "post classess ", gdata });
      } else {
        return res.send("already exist");
      }
    }

   
  } catch (error) {
    console.log("section error", error);
  }
};

const grammarSection = async (req, res) => {
  try {
    const { section } = req.params;
    console.log("sec", section);
    if (section == "grammar") {
      const gdata = await GrammarModel.find({}, { topic: 1, _id: 0 });
      res.status(200).send({ gsetion: gdata });
    } else if (section == "vocab") {
      const gdata = await VocabModal.find({}, { topic: 1, _id: 0 });
      res.status(200).send({ gsetion: gdata });
    } else if (section == "phrases") {
      const gdata = await PhrasesModal.find({}, { topic: 1, _id: 0 });
      res.status(200).send({ gsetion: gdata });
    }else if (section == "communication") {
      const gdata = await CommunicationModel.find({}, { topic: 1, _id: 0 });
      res.status(200).send({ gsetion: gdata });
    }
  } catch (error) {
    console.log("error in gramaar section controller", error);
  }
};

const EditData = async (req, res) => {
  try {
    const { sedit, cedit } = req.params;
    if (sedit == "grammar") {
      const gdata = await GrammarModel.find({ topic: cedit });
      res.status(200).send({ edit: gdata });
    } else if (sedit == "vocab") {
      const gdata = await VocabModal.find({ topic: cedit });
      res.status(200).send({ edit: gdata });
      console.log("ggg", gdata);
    } else if (sedit == "phrases") {
      const gdata = await PhrasesModal.find({ topic: cedit });
      res.status(200).send({ edit: gdata });
      console.log("ggg", gdata);
    }else if (sedit == "communication") {
      const gdata = await CommunicationModel.find({ topic: cedit });
      res.status(200).send({ edit: gdata });
      console.log("ggg", gdata);
    }
    console.log("65", sedit, cedit);
  } catch (error) {
    console.log("error in gramaar section controller", error);
  }
};

const deleteClass = async (req, res) => {
  try {
    const { section, chapter, id } = req.body;
    console.log("ddele", section);
    if (section == "grammar") {
      const detele1 = await GrammarModel.updateOne(
        { topic: chapter },
        { $pull: { videos: { _id: id } } }
      );
      res.send({ msg: "data is deleted" });
    } else if (section == "vocab") {
      const detele1 = await VocabModal.updateOne(
        { topic: chapter },
        { $pull: { videos: { _id: id } } }
      );
      res.send({ msg: "data is deleted" });
    }else if (section == "phrases") {
      const detele1 = await PhrasesModal.updateOne(
        { topic: chapter },
        { $pull: { videos: { _id: id } } }
      );
      res.send({ msg: "data is deleted" });
    }else if (section == "communication") {
      const detele1 = await CommunicationModel.updateOne(
        { topic: chapter },
        { $pull: { videos: { _id: id } } }
      );
      res.send({ msg: "data is deleted" });
    }
  } catch (error) {
    console.log("error in delete class");
  }
};

//   vocab  section

const vocabSection = async (req, res) => {
  try {
    const gdata = await VocabModal.find({}, { topic: 1, _id: 0 });
    res.status(200).send({ gsetion: gdata });
  } catch (error) {
    console.log("error in vocab section controller", error);
  }
};

const AddToVocab = async (req, res) => {
  try {
    const { section, chapter, title, desc, link } = req.body;
    console.log(section, chapter, title, desc, link);

    if ((await section) == "vocab") {
      console.log("111 vocab");
    }

    const upd = await GrammarModel.updateOne(
      { topic: chapter },
      { $push: { videos: { title, desc, link } } }
    );
    res.status(200).send({ msg: "post class", upd });
  } catch (error) {
    console.log("data is not saved", error);
  }
};

module.exports = {
  AddToGrammar,
  getGrammarData,
  createSection,
  grammarSection,
  EditData,
  deleteClass,

  vocabSection,
  AddToVocab,
};
