const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/edgetech", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

const LFJobSeeds = [
  {
    first: "Timothy",
    last: "Cutlip",
    email: "tcutlip08@gmail.com",
    phone: "404-933-5642"
  },
  {
    first: "Jesse",
    last: "McKinney",
    email: "solid51308@gmail.com",
    phone: "404-867-5309"
  }
];

db.LFJob.deleteMany({})
  .then(() => db.LFJob.collection.insertMany(LFJobSeeds))
  .then(data => {
    console.log(`Inserted ${data.insertedCount} Seeds for LFJob`);
  })
  .catch(err => {
    // console.error(err);
  });

const LFEmpSeeds = [
  {
    company: "Company Name",
    jobTitle: "Title to Fill",
    detail: "Work needed to be done.",
    email: "Company.Name@gmail.com",
    phone: "1-800-555-5555"
  }
];

db.LFEmp.deleteMany({})
  .then(() => db.LFEmp.collection.insertMany(LFEmpSeeds))
  .then(data => {
    console.log(`Inserted ${data.insertedCount} Seeds for LFEmp`);
    process.exit(0);
  })
  .catch(err => {
    // console.error(err);
  });
