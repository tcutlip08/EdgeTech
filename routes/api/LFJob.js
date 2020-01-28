const router = require("express").Router();
const LFJobController = require("../../controllers/LFJobController");

router
  .route("/:id")
  .get(LFJobController.findById)
  .put(LFJobController.update)
  .delete(LFJobController.remove);

router
  .route("/")
  .get(LFJobController.findAll)
  .post(LFJobController.create);

module.exports = router;
