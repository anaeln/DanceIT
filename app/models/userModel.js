const {Schema, model}= require('mongoose');

const UserSchema=new Schema({
    //--- required fields
  email: {
      type: String,
      required: true,
      max: 50,
      unique:true
  },
  fullName: {
      type: String,
      required: true,
      min: 2,
      max: 60,
  },
  username: {
      type: String,
      required: true,
      min: 2,
      max: 60,
  }, 
  password: {
      type: String,
      required: true,
      min: 4,
  },
    //--- optional fields
  city: {
        type: String,
  },
  country: {
        type: String,
  },
  address: {
        type: String,
  },
  picturePath: {
        type: String,
        default: "",
  },
  dancingStyles: {
        type: String,
  },
  userStudios: {
        type: String,
        required: false,
  },
  dancingGroups: {
        type: String,
        required: false,
  },
  friends: {
        type: Array,
        default: [],
  }

  })

module.exports=model('User',UserSchema);