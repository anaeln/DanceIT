const UserModel = require('../models/userModel');

class ProfileService {
  async getUser(email) {
    const user = await UserModel.findOne({email});
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
