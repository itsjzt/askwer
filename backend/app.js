const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require('body-parser');

const routes = require("./routes");
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(routes);
app.use(function(req, res, next) {
  res.status(404).end();
});

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
