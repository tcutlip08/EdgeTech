const router = require("express").Router();
const LFEmpController = require("../../controllers/LFEmpController");

router
  .route("/:id")
  .get(LFEmpController.findById)
  .put(LFEmpController.update)
  .delete(LFEmpController.remove);

router
  .route("/")
  .get(LFEmpController.findAll)
  .post(LFEmpController.create);

module.exports = router;
