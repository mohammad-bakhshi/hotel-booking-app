const usernameValidation = (req, res, next) => {
  if (!req.body.username || req.body.username === "") {
    return res.status(400).json({
      err: true,
      msg: "username is required"
    })
  }
  next();
}

const passwordValidation = (req, res, next) => {
  if (!req.body.password || req.body.password === "") {
    return res.status(400).json({
      err: true,
      msg: "password is required"
    })
  }
  next();
}

module.exports = {
  usernameValidation,
  passwordValidation
}