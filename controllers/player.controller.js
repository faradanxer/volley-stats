const Player = require("../models/player.model");
const errorHandler = require("../utils/errorHandler");

module.exports.getAllByTeam = async function (req, res) {
  try {
    const player = await Player.find({
      team_A: req.params.team,
    });
    if (player) {
      res.status(200).json(player);
    } else {
      res.status(404).json({
        message: "Wrong team",
      });
    }
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.getById = async function (req, res) {
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
};
module.exports.deleteById = async function (req, res) {
  try {
    await Player.remove({ _id: req.params.id });
    res.status(200).json({ message: "Player has been deleted" });
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.updateById = async function (req, res) {
  try {
    const player = await Player.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    );
    if (games) {
      res.status(200).json(player);
    }
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.create = async function (req, res) {
  try {
    const player = await new Player({
      team_id: req.body.team_id,
      name: req.body.name,
      surname: req.body.surname,
      player_number: req.body.player_number,
    }).save();
    res.status(201).json(player);
  } catch (e) {
    errorHandler(res, e);
  }
};
