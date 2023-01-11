require('dotenv').config();
const mongoose = require('mongoose');
const userModel = require('./models/user/user.model');
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL)
  .then(async () => {
    console.log("DB connection established...")
    const adminExists = await userModel.adminExists();
    if (!adminExists) await userModel.createAdmin();
    const http = require('http');
    const app = require('./app');
    const PORT = process.env.PORT || 8080;
    const server = http.createServer(app);
    server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  })
  .catch((error) => {
    console.log("DB connection error:" + error);
  })