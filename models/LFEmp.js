const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LFEmpSchema = new Schema({
  company: { type: String },
  jobTitle: { type: String },
  detail: { type: String },
  email: { type: String },
  phone: { type: String }
});

const LFEmp = mongoose.model("LFEmp", LFEmpSchema);

module.exports = LFEmp;
