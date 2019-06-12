const express = require("express");
const router = express.Router();
const database = require("./database");
const index = require("./controllers/index");
const question = require("./controllers/question");
const answer = require("./controllers/answer");
const user = require("./controllers/user");
const validateSignup = require("./utilities/validateSignup")
const hashPassword = require("./utilities/hashPassword")
const verifyUniqueEmail = require("./utilities/verifyUniqueEmail")

router.get("/", index.home);
router.post("/user", validateSignup, hashPassword, verifyUniqueEmail, user.create);

module.exports = router;
