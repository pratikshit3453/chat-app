require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.once("open", function () {
  console.log("mongodb connection open");
});
mongoose.connection.on("error", function (err) {
  console.log(err.message);
});

//Bring in the models
require("./modals/user");
require("./modals/Chatroom");
require("./modals/Message");

const app = require("./app");

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
