const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

class AuthService {
  async registration(email, fullName, username, password) {
    const candidate = await UserModel.findOne({ email });

    if (candidate) {
      throw new Error('email exist');
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await UserModel.create({
      email,
      fullName,
      username,
      password: hashPassword,
    });

    return user.email;
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error('User with this Email don`t found');
    }
    const isPasswordEquals = await bcrypt.compare(password, user.password);
    if (!isPasswordEquals) {
      throw new Error('Invalid password');
    }
    return user.email;
  }
}

module.exports = new AuthService();
