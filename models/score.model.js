const mongoose = require("mongoose");
const scoreSchema = new mongoose.Schema({
  game_id: {
    ref: "games",
    type: mongoose.Schema.Types.ObjectId,
  },
  set: {
    type: Number,
    required: true
  },
  points_A: {
    type: Number,
    required: true,
    default: 0,
  },
  points_B: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("scores", scoreSchema);
