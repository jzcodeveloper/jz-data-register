const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    maxLength: 30,
    required: [true, "The name is required"]
  },

  email: {
    type: String,
    required: [true, "The email is required"],
    maxLength: 60,
    unique: true
  },

  password: {
    type: String,
    maxLength: 60,
    required: [true, "The password is required"]
  },

  online: {
    type: Boolean,
    default: false
  }
});

//userSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });

module.exports = mongoose.model("User", userSchema);
