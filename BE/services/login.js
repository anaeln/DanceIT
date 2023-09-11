const User = require("../models/User");

async function login(username, password) {
    const user = await User.findOne({ _id: username, password });
    return user != null
}

async function register(email, fullName, username, password) {
    const user = new User({
        email: email,
        fullName: fullName,
        _id: username,
        password: password
    });
    await user.save()        
}

module.exports = { login, register }