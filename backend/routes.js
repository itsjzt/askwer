var express = require("express");
var router = express.Router();
const database = require("./database");
const index = require("./controllers/index");
const question = require("./controllers/question");
const answer = require("./controllers/answer");

router.get("/", index.index);
router.get("/postQuestion", question.postQuestion);
router.get("/answer", answer.answer);

module.exports = router;
