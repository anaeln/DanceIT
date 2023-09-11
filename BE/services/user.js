const User = require('../models/user');

const createUser = async (username, password) => {
    const user = new User({
        username : username,
        password : password
    });

    return await user.save();
};

const getUsers = async () => {
    return await User.find({});
};

const getUserByUsername = async (id) => {
    return await User.findById(id);
};

const updateUser = async (username, password) => {
    const user = await getUserByUsername(username);
    if (!user) // user not exists
        return null;
 
    user.password = password;
    await user.save();
    return user;
};

const deleteUser = async (username) => {
    const user = await getUserByUsername(username);
    if (!user)
        return null;

    await user.remove();
    return user;
};

module.exports = {
    createUser,
    getUsers,
    getUserByUsername, 
    updateUser,
    deleteUser
}