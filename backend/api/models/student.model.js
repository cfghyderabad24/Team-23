import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
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

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
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
  gender: {
    type: String,
    required: true,
  },
  twelthPercentage: {
    type: Number,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  stream: {
    type: String,
    required: true,
  },
  scholarshipYear: {
    type: Number,
    required: true,
  },
  scholarshipAmount: {
    type: Number,
    required: true,
  },
  graduationYear: {
    type: Number,
    required: true,
  },
  currentOccupation: {
    type: String,
    required: true,
  },
  ngoRegion: {
    type: String,
    required: true,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  status: {
    type: [String],
    required: true,
  },
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

export default Student;
