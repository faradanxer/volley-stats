const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
  team_id: {
    ref: "teams",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  player_number: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("players", playerSchema);
