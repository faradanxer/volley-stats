const express = require("express");
const passport = require("passport");
const controller = require("../controllers/score.controller");
const router = express.Router();

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.getScore
);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.create
);

router.patch(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    controller.update
  );
module.exports = router;
