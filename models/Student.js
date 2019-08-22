const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const Represent = require("./Represent");
const Parent = require("./Parent");

const validSexTypes = {
  values: ["Male", "Female"],
  message: "{VALUE} is not a valid sex type"
};

const studentSchema = new Schema({
  photo: {
    type: String
  },

  name: {
    type: String,
    required: [true, "The name field is needed"]
  },

  identification: {
    type: Number,
    required: [true, "The identification field is needed"]
  },

  sex: {
    type: String,
    enum: validSexTypes,
    required: [true, "The sex field is needed"]
  },

  birthday: {
    type: Date,
    required: [true, "The bithday field is needed"]
  },

  birthplace: {
    type: String,
    required: [true, "The birthplace field is needed"]
  },

  municipality: {
    type: String,
    required: [true, "The municipality field is needed"]
  },

  country: {
    type: String,
    required: [true, "The country is needed"]
  },

  age: {
    type: Number,
    required: [true, "The age field is needed"]
  },

  weight: {
    type: Number,
    required: [true, "The weight field is needed"]
  },

  height: {
    type: Number,
    required: [true, "The height field is needed"]
  },

  shirtSize: {
    type: String,
    required: [true, "The size of the shirt field is needed"]
  },

  pantSize: {
    type: Number,
    required: [true, "The size of the pants field is needed"]
  },

  shoeSize: {
    type: Number,
    required: [true, "The size of the shoes field is needed"]
  },

  liveWithParents: {
    type: String,
    required: [true, "The live with parents field is needed"]
  },

  direction: {
    type: String,
    required: [true, "The direction field is needed"]
  },

  phoneNumber: {
    type: Number,
    required: [true, "The phone number field is needed"]
  },

  impedimentToSports: {
    type: String,
    required: [true, "The impediment to make sports field is needed"]
  },

  alergicTo: {
    type: String,
    required: [true, "The alergic to field is needed"]
  },

  date: {
    type: Date,
    default: Date.now
  },

  represent: Represent.schema,
  parent: Parent.schema
});

//studentSchema.plugin(uniqueValidator, {message: "{PATH} must be unique"});

module.exports = mongoose.model("Student", studentSchema);
