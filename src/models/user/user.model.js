const bcrypt = require('bcryptjs');
const User = require('./user.mongo');

const createAdmin = async () => {
  try {
    const admin = {
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD,
      role: "admin"
    }
    const result = await User.create(admin);
    return result;
  } catch (error) {
    console.log(error);
  }
}

const adminExists = async () => {
  try {
    const result = await User.findOne({ role: "admin" });
    if (result) return true;
    return false;
  } catch (error) {
    console.log(error);
  }
}

const createUser = async (username, password) => {
  try {
    const userExists = await User.findOne({ username }) ? true : false;
    if (userExists) return "exists";
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const user = {
      username,
      password,
      role: "user"
    }
    const result = await User.create(user);
    return result;
  } catch (error) {
    console.log(error.code);
  }
}

const authenticateUser = async (username, password) => {
  try {
    // authentication status: notfound notmatched matched
    const user = await User.findOne({ username });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) return "matched"
      else return "notmatched";
    }
    return "notfound";
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createAdmin,
  adminExists,
  createUser,
  authenticateUser
}