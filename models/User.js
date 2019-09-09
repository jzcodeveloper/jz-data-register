const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name is obligatory"]
  },

  email: {
    type: String,
    required: [true, "The email is obligatory"],
    unique: true
  },

  password: {
    type: String,
    required: [true, "The password is obligatory"]
  },

  online: {
    type: Boolean,
    default: false
  }
});

//userSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });

module.exports = mongoose.model("User", userSchema);
