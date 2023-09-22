const Score = require("../models/score.model");
const errorHandler = require("../utils/errorHandler");

module.exports.getScore = async function (req, res) {
  try {
    const player = await Player.find({
      _id: req.params.id,
    });
    if (player) {
      res.status(200).json(player);
    } else {
      res.status(404).json({
        message: "Wrong ID",
      });
    }
  } catch (e) {
    errorHandler(res, e);
  }
};module.exports.create = async function (req, res) {
  try {
    const score = await new Score({
      game_id: req.body.game_id,
      set: req.body.set
    }).save();
    res.status(201).json(player);
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.update = async function (req, res) {
  try {
    const score = await Score.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    );
    if (score) {
      res.status(200).json(score);
    }
  } catch (e) {
    errorHandler(res, e);
  }
};
