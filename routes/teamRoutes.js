const express = require("express");
const passport = require("passport");
const controller = require("../controllers/team.controller");
const router = express.Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.create
);
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getAll
);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.getById
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
