const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const validSexType = {
  values: ["Male", "Female"],
  message: "{VALUE} is not a valid sex type"
};

const validMaritalStatus = {
  values: ["Married", "Single", "Widowed", "Divorced"],
  message: "{VALUE} is not a valid civil state"
};

const representSchema = new Schema({
  name: {
    type: String,
    maxLength: 30,
    required: [true, "The represent name field is needed"]
  },

  sex: {
    type: String,
    enum: validSexType,
    maxLength: 10,
    required: [true, "The sex field is needed"]
  },

  identification: {
    type: Number,
    max: 99999999,
    required: [true, "The identification field is needed"]
  },

  birthday: {
    type: Date,
    required: [true, "The birthday field is needed"]
  },

  age: {
    type: Number,
    max: 150,
    required: [true, "The age is needed"]
  },

  maritalStatus: {
    type: String,
    maxLength: 10,
    required: [true, "The civil state is needed"],
    enum: validMaritalStatus
  },

  occupation: {
    type: String,
    maxLength: 30,
    required: [true, "The occupation field is needed"]
  },

  company: {
    type: String,
    maxLength: 30,
    required: [true, "The company field is needed"]
  },

  address: {
    type: String,
    maxLength: 30,
    required: [true, "The address field is needed"]
  },

  phoneNumber1: {
    type: Number,
    max: 99999999999,
    required: [true, "The first phone number is needed"]
  },

  phoneNumber2: {
    type: Number,
    max: 99999999999,
    required: false
  }
});

//representSchema.plugin(uniqueValidator,{message: "{PATH} must be unique"});

module.exports = mongoose.model("Represent", representSchema);
