"use strict";

require("dotenv").config();

var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pratik:pratik123@cluster0.4gmto.mongodb.net/Cluster0?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.connection.once("open", function () {
  console.log("mongodb connection open");
});
mongoose.connection.on("error", function (err) {
  console.log(err.message);
}); //Bring in the models

require("./modals/user");

require("./modals/Chatroom");

require("./modals/Message");

var app = require("./app");

app.listen(8000, function () {
  console.log("Server listening on port 8000");
});