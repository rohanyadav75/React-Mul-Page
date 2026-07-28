const users = require("../data/users");

const getUsers = (req, res) => {
  res.json(users);
};

module.exports = {
  getUsers
};