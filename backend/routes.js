const express = require("express");
const router = express.Router();
const database = require("./database");
const index = require("./resolvers/index");
const createUser = require("./db_access/createUser");
const validateSignup = require("./validators/signup")
const hashPassword = require("./pre_transformers/hashPassword")
const generateJWT = require("./post_transformers/generateJWT")
const uniqueEmail = require("./db_validators/uniqueEmail")
const user = require("./resolvers/user")

router.get("/", index.home);
router.post(
  "/user",
  validateSignup,
  uniqueEmail,
  hashPassword,
  createUser
)

module.exports = router;
