const mongoose = require("mongoose");
const statSchema = new mongoose.Schema({
  player_id: {
    ref: "players",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  game_id: {
    ref: "games",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  attack: {
    type: Number,
    required: true,
    default: 0,
  },
  serve: {
    type: Number,
    required: true,
    default: 0,
  },
  receive: {
    type: Number,
    required: true,
    default: 0,
  },
  fault: {
    type: Number,
    required: true,
    default: 0,
  },
  block: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("stats", statSchema);
