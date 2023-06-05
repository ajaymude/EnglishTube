const express = require("express");

const {
  AddToGrammar,
  getGrammarData,
  createSection,
  grammarSection,
  EditData,
  deleteClass,
  vocabSection,
} = require("../Controllers/AdminControllers");
const UserRoutes = express.Router();


// Grammar section
UserRoutes.post("/admin", AddToGrammar); // add chapter to section
UserRoutes.post("/createsection", createSection); // add chapter to section
UserRoutes.get("/:topic/:chapter", getGrammarData);
UserRoutes.get("/:section", grammarSection);
UserRoutes.get("/edit/:sedit/:cedit", EditData);
UserRoutes.post("/:deleteclass", deleteClass );

// Vocab section

UserRoutes.get("/vocabsection", vocabSection);




module.exports = UserRoutes;
