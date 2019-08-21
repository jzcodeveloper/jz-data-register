const express = require("express");
const app = express();

//Routes
app.use("/users", require("./users"));
app.use("/students", require("./students"));

module.exports = app;
