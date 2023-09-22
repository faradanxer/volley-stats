const jwt = require('jsonwebtoken');
const User = require("../models/user.model");
const keys = ("./config/keys");
const errorHandler = require('../utils/errorHandler');
module.exports.login = async function (req, res) {
  const candidate = await User.findOne({ email: req.body.email });
  if (candidate) {
    if (req.body.password ===candidate.password) {
        //generate jwt
        const token = jwt.sign({
          email: candidate.email,
          userId: candidate._id,
        },keys.jwt,{expiresIn:10800})
        res.status(200).json({ token:`Bearer ${token}` })
    }else{
      //wrong password
      res.status(404).json({
        message: "Wrong password",
      });
    }
  } else {
    //throw error,cuz email not exists
    res.status(404).json({
      message: "User with this email not found",
    });
  }
};

module.exports.register = async function (req, res) {
  const candidate = await User.findOne({ email: req.body.email });
  if (candidate) {
    //throw error,cuz email exists
    res.status(409).json({
      message: "Email exists,try new one",
    });
  } else {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });
    try {
      await user.save()
      res.status(201).json({ message: "User created" })
    } catch (e) {
      // error on server
      errorHandler(res,e)
    }
  }
};
