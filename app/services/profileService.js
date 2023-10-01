const UserModel = require('../models/userModel');

class ProfileService {
  async getUser(id) {
    const user = await UserModel.findById(id);
    if (!user) {
      throw new Error('User with this Email don`t found');
    }
    const userData = {
      email: user.email,
      fullName: user.fullName,
    };
    return userData;
  }
}

module.exports = new ProfileService();
