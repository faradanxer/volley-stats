const express = require("express");
const passport = require("passport");
const controller = require("../controllers/stats.controller");
const router = express.Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.create
);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.getStatsById
);
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.updateById
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.deleteById
);

module.exports = router;
