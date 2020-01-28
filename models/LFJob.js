const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LFJobSchema = new Schema({
  first: { type: String },
  last: { type: String },
  email: { type: String, unique: true },
  phone: { type: String }
});

const LFJob = mongoose.model("LFJob", LFJobSchema);

module.exports = LFJob;
