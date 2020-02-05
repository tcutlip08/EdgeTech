const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
////////////////////////////////////////////////////
// response.cookie("same-site-cookie", "foo", { sameSite: "lax" });
// response.cookie("cross-site-cookie", "bar", { sameSite: "none", secure: true });

// response.setHeader("set-cookie", [
//   "same-site-cookie=bar; SameSite=Lax",
//   "cross-site-cookie=foo; SameSite=None; Secure"
// ]);
/////////////////////////////////////////////////////

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/edgetech", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

// Start the API server
app.listen(PORT, function() {
  // console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
