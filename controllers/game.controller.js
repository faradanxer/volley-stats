const Game = require("../models/game.model");
const errorHandler = require("../utils/errorHandler");
//Просмотр всех игр команды
module.exports.getAllByTeam = async function (req, res) {
  try {
    const games = await Game.find({
      team_id: req.params.team,
    });
    if (games) {
      res.status(200).json(games);
    } else {
      const games = await Game.find({
        team_B: req.params.team,
      });
      if (games) {
        res.status(200).json(games);
      } else {
        res.status(404).json({
          message: "Wrong team",
        });
      }
    }
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.getAll = async function (req, res) {
  try {
    const games = await Game.find();
    if (games) {
      res.status(200).json(games);
    } else {
      res.status(404).json({
        message: "Wrong request",
      });
    }
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.deleteById = async function (req, res) {
  try {
    await Game.remove({ _id: req.params.id });
    res.status(200).json({ message: "Game has been deleted" });
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.updateById = async function (req, res) {
  try {
    const games = await Game.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    );
    if (games) {
      res.status(200).json(games);
    }
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.create = async function (req, res) {
  try {
    const game = await new Game({
      team_A: req.body.team_A,
      team_A: req.body.team_b,
    }).save();
    res.status(201).json(game);
  } catch (e) {
    errorHandler(res, e);
  }
};
