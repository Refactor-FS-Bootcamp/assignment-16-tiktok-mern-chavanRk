const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Router = require("./routes");
app.use(express.json());
const cors = require("cors");
app.use(cors());

mongoose.connect(
  "mongodb+srv://chavan:chavan@cluster0.cord6go.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(Router);
app.listen(8000, () => {
  console.log("Server is running at port ");
});
