const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const responseTime = require("response-time");

const app = express();

//Connect DB
connectDB();

//Init Middlewares
app.use(responseTime());
app.use(express.json({ extended: false }));

//Define routes
app.use("/api", require("./routes/index"));

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  // Always renders index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const fs = require("fs");
const folders = fs.readdirSync(path.join(__dirname, "."));
console.log(folders);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
