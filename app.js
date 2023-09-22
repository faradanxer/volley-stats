const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const authRoutes = require("./routes/authRoutes");
const gameRoutes = require("./routes/gameRoutes");
const scoreRoutes = require("./routes/scoreRoutes");
const statsRoutes = require("./routes/statsRoutes");
const playerRoutes = require("./routes/playerRoutes");
const teamRoutes = require("./routes/teamRoutes");

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("MongoDB connected."))
  .catch((error) => console.log(error));
const app = express();

app.use(passport.initialize());
require("./middlewares/passport")(passport);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", authRoutes);

app.use("/api/game", gameRoutes);
app.use("/api/score", scoreRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/player", playerRoutes);
app.use("/api/team", teamRoutes);

module.exports = app;
