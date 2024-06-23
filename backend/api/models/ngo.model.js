import mongoose from 'mongoose';

const contactPersonSchema = new mongoose.Schema({
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
});

const locationSchema = new mongoose.Schema({
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
});

const ngoSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
    unique: true
  },
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
    type: contactPersonSchema,
    required: true,
  },
  location: {
    type: locationSchema,
    required: true,
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
  areasOfWork: [{
    type: String,
    required: true,
  }],
  website: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const NGO = mongoose.model('NGO', ngoSchema);

export default NGO;
