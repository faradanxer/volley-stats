const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  ligue: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("teams", teamSchema);
