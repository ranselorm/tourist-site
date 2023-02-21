const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//statics signup

userSchema.statics.signup = async function (email, username, password) {
  if (!email || !username || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  //check if email or username exists in db
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw Error("Email already in use");
  }
  const existingUsername = await User.findOne({ username });
  if (existingUsername) {
    throw Error("Username already in use");
  }

  //encryption
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = this.create({ username, email, password: hash });

  return user;
};

//statics login

userSchema.statics.login = async function (username, password) {
  //validation
  if (!username || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ username });
  if (!user) {
    throw Error("Incorrect username or password");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect username or password");
  }

  return user;
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
