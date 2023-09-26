const userService = require('../services/user');


const createUser = async (req, res) => {
    const newUser = await userService.createUser(req.body.username, req.body.password);
    res.json(newUser);
};

const getUsers = async (req, res) => {
    const users = await userService.getUsers();
    res.json(users);
};

const getUser = async (req, res) => {
    const user = await userService.getUserByUsername(req.params.username);
    if (!user) {
        return res.status(404).json({ errors: ['User not found'] });
    }
    res.json(user);
};

const updateUser = async (req, res) => {
    if (!req.body.password) {
      res.status(400).json({
        message: "Password is required",
      });
    }
  
    const user = await userService.updateUser(req.params.username, req.body.password);
    if (!user) {
      return res.status(404).json({ errors: ['User not found'] });
    }
  
    res.json(user);
  };

  const deleteUser = async (req, res) => {
    const user = await userService.deleteUser(req.params.username);
    if (!user) {
      return res.status(404).json({ errors: ['User not found'] });
    }
    res.send();
  };

  module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
  };