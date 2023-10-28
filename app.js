require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./routes");
const errorHandler = require("./middlewares/error-handler");
const port = process.env.PORT || 6000;

const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", router);
app.use(errorHandler);

if (process.env.NODE_ENV != "test") {
  app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
  });
}

module.exports = app;
