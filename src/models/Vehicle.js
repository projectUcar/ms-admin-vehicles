import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  line: {
    type: String,
    required: true,
  },
  plate: {
    type: String,
    required: true,
    match: /^[A-Z]{3}\d{3}$/,
    unique: true,
  },
  color: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  doors: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
},
  {
    timestamps: true,
    versionKey: false,
  }
);

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;
