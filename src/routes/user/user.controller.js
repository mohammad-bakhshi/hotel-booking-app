const {
  createUser,
  authenticateUser
} = require('../../models/user/user.model');


const httpSignupUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await createUser(username, password);
    if (result === "exists") {
      return res.status(400).json({
        err: true,
        msg: "user exists"
      })
    }
    return res.status(201).json(result);
  } catch (error) {
    console.log(error)
  }
}

const httpSigninUser = async (req, res) => {
  try {
    const status = await authenticateUser(req.body.username, req.body.password);
    if (status === "matched") return res.status(200).send("logged in")
    else if (status === "notmatched") return res.status(403).send("wrong password")
    else if (status === "notfound") return res.status(404).send("not found")
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  httpSignupUser,
  httpSigninUser
}