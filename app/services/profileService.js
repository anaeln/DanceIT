const UserModel = require('../models/userModel');

class ProfileService {
  async getUser(id) {
    const user = await UserModel.findById(id);
    if (!user) {
      throw new Error('User with this Email don`t found');
    }
    const userDetails = {
      email: user.email,
      fullName: user.fullName,
    };
    return userDetails;
  }

  /* UPDATE */
  async updateUserInfo(id, fields) {
   return UserModel.findOneAndUpdate({id}, fields);
  }

}

module.exports = new ProfileService();
