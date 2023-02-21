const User = require("../models/userModel");

//signup user
const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);
    res.status(200).json({ username, user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

//login user

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);
    res.status(201).json({ username, user });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
};
