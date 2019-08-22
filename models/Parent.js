const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const validSexType = {
  values: ["Male", "Female"],
  message: "{VALUE} is not a valid sex type"
};

const validMaritalStatus = {
  values: ["Married", "Single", "Widowed", "Divorced"],
  message: "{VALUE} is not a valid marital status"
};

const parentSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name field is needed"]
  },

  sex: {
    type: String,
    required: [true, "The sex field is needed"],
    enum: validSexType
  },

  identification: {
    type: Number,
    required: [true, "The identification field is needed"]
  },

  birthday: {
    type: Date,
    required: [true, "The bithday field is needed"]
  },

  company: {
    type: String,
    required: [true, "The company field is needed"]
  },

  maritalStatus: {
    type: String,
    enum: validMaritalStatus,
    required: [true, "The marital status field is needed"]
  },

  occupation: {
    type: String,
    required: [true, "The occupation field is needed"]
  },

  address: {
    type: String,
    required: [true, "The address field is needed"]
  },

  phoneNumber1: {
    type: Number,
    required: [true, "The phone number 1 is needed"]
  },

  phoneNumber2: {
    type: Number,
    required: false
  },

  livesWithKid: {
    type: String,
    required: [true, "The lives with kid field is needed"]
  }
});

//parentSchema.plugin(uniqueValidator,{message: "{PATH} must be unique"});

module.exports = mongoose.model("Parent", parentSchema);
