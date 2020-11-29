const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
var morgan = require('morgan')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(cors());
app.use(morgan("dev"))

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pland", {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
