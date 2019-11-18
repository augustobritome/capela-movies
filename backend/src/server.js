const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");

const app = express();

mongoose.connect(
  "mongodb+srv://augustobrito:261291@cluster0-xqga7.gcp.mongodb.net/CapelaMovies?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3001);
