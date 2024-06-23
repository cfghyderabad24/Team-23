import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  volunteerId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  ngoname: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

export default Volunteer;
