const Stats = require("../models/stats.model");
const errorHandler = require("../utils/errorHandler");
module.exports.getStatsById = async function (req, res) {
  try {
    const stats = await Stats.find({
      _id: req.params.id,
    });
    if (stats) {
      res.status(200).json(stats);
    } else {
      res.status(404).json({
        message: "Wrong ID",
      });
    }
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.deleteById = async function (req, res) {
  try {
    await Stats.remove({ _id: req.params.id });
    res.status(200).json({ message: "Stats have been deleted" });
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.updateById = async function (req, res) {
  try {
    const stats = await Stats.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    );
    if (stats) {
      res.status(200).json(stats);
    }
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.create = async function (req, res) {
  try {
    const stats = await new Stats({
      game_id: req.body.game_id,
      player_id: req.body.player_id,
    }).save();
    res.status(201).json(stats);
  } catch (e) {
    errorHandler(res, e);
  }
};
