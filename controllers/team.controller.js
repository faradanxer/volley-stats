const Team = require("../models/team.model");
const errorHandler = require("../utils/errorHandler");
module.exports.getAll = async function (req, res) {
  try {
    const teams = await Team.find();
    if (stats) {
      res.status(200).json(teams);
    } else {
      res.status(404).json({
        message: "Wrong request",
      });
    }
  } catch (e) {
    errorHandler(res, e);
  }
};
module.exports.getById = async function (req, res) {
  try {
    const team = await Team.find({
      _id: req.params.id,
    });
    if (team) {
      res.status(200).json(team);
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
    await Team.remove({ _id: req.params.id });
    res.status(200).json({ message: "Team has been deleted" });
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.updateById = async function (req, res) {
  try {
    const team = await Team.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    );
    if (stats) {
      res.status(200).json(team);
    }
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.create = async function (req, res) {
  try {
    const team = await new Team({
      name: req.body.name,
      ligue: req.body.ligue,
    }).save();
    res.status(201).json(team);
  } catch (e) {
    errorHandler(res, e);
  }
};
