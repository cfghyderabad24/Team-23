const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ngoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  contactPerson: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  location: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  establishedDate: {
    type: Date,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  areasOfWork: {
    type: [String],
    required: true,
  },
  website: {
    type: String,
  },
});

const NGO = mongoose.model("ngoname", ngoSchema);

module.exports = NGO;
