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

module.exports = {
  createAdmin,
  adminExists
}