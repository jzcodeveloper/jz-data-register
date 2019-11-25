const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const Parent = require("./Parent");
const Represent = require("./Represent");

const validSexTypes = {
  values: ["Male", "Female"],
  message: "{VALUE} is not a valid sex type"
};

const studentSchema = new Schema({
  photo: {
    type: String,
    maxLength: 100
  },

  name: {
    type: String,
    maxLength: 30,
    required: [true, "The name field is needed"]
  },

  identification: {
    type: Number,
    max: 100000000,
    required: [true, "The identification field is needed"]
  },

  sex: {
    type: String,
    enum: validSexTypes,
    maxLength: 10,
    required: [true, "The sex field is needed"]
  },

  birthday: {
    type: Date,
    required: [true, "The bithday field is needed"]
  },

  birthplace: {
    type: String,
    maxLength: 30,
    required: [true, "The birthplace field is needed"]
  },

  municipality: {
    type: String,
    maxLength: 30,
    required: [true, "The municipality field is needed"]
  },

  country: {
    type: String,
    maxLength: 30,
    required: [true, "The country is needed"]
  },

  age: {
    type: Number,
    max: 150,
    required: [true, "The age field is needed"]
  },

  weight: {
    type: Number,
    max: 600,
    required: [true, "The weight field is needed"]
  },

  height: {
    type: Number,
    max: 300,
    required: [true, "The height field is needed"]
  },

  shirtSize: {
    type: String,
    maxLength: 3,
    required: [true, "The size of the shirt field is needed"]
  },

  pantSize: {
    type: Number,
    max: 50,
    required: [true, "The size of the pants field is needed"]
  },

  shoeSize: {
    type: Number,
    max: 50,
    required: [true, "The size of the shoes field is needed"]
  },

  livesWithParents: {
    type: String,
    maxLength: 3,
    required: [true, "The lives with parents field is needed"]
  },

  address: {
    type: String,
    maxLength: 50,
    required: [true, "The address field is needed"]
  },

  phoneNumber: {
    type: Number,
    max: 99999999999,
    required: [true, "The phone number field is needed"]
  },

  impedimentToSports: {
    type: String,
    maxLength: 30,
    required: [true, "The impediment to make sports field is needed"]
  },

  allergicTo: {
    type: String,
    maxLength: 30,
    required: [true, "The allergic to field is needed"]
  },

  date: {
    type: Date,
    default: Date.now
  },

  parent: Parent.schema,
  represent: Represent.schema
});

//studentSchema.plugin(uniqueValidator, {message: "{PATH} must be unique"});

module.exports = mongoose.model("Student", studentSchema);
