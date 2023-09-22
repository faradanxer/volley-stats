const mongoose = require("mongoose");
const gameSchema = new mongoose.Schema({
  team_A: {
    ref: "teams",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  team_B: {
    ref: "teams",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("games", gameSchema);
