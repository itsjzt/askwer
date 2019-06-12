const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routes = require("./routes");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", routes);
app.use(function(req, res, next) {
  res.status(404).json({ error: { message: "NotFound" } });
});

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
