const router = require("express").Router();
const LFEmp = require("./LFEmp");
const LFJob = require("./LFJob");

router.use("/LFEmp", LFEmp);
router.use("/LFJob", LFJob);

module.exports = router;
