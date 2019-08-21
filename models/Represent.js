const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const validSexType = {
  values: ["Masculino", "Femenino"],
  message: "{VALUE} is not a valid sex type"
};

const validCivilState = {
  values: ["Casado/a", "Soltero/a", "Viudo/a"],
  message: "{VALUE} is not a valid civil state"
};

const representSchema = new Schema({
  name: {
    type: String,
    required: [true, "The represent name field is needed"]
  },

  sex: {
    type: String,
    enum: validSexType,
    required: [true, "The sex field is needed"]
  },

  identification: {
    type: Number,
    required: [true, "The identification field is needed"]
  },

  birthday: {
    type: Date,
    required: [true, "The birthday field is needed"]
  },

  age: {
    type: Number,
    required: [true, "The age is needed"]
  },

  civilState: {
    type: String,
    required: [true, "The civil state is needed"],
    enum: validCivilState
  },

  ocupation: {
    type: String,
    required: [true, "The ocupation field is needed"]
  },

  company: {
    type: String,
    required: [true, "The company field is needed"]
  },

  direction: {
    type: String,
    required: [true, "The direction field is needed"]
  },

  phoneNumber1: {
    type: Number,
    required: [true, "The first phone number is needed"]
  },

  phoneNumber2: {
    type: Number,
    required: false
  }
});

//representSchema.plugin(uniqueValidator,{message: "{PATH} must be unique"});

module.exports = mongoose.model("Represent", representSchema);
