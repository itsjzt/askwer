const express = require("express");
const router = express.Router();
const database = require("./database");
const index = require("./controllers/index");
const question = require("./controllers/question");
const answer = require("./controllers/answer");

router.get("/", index.home);

module.exports = router;
