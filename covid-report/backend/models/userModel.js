import mongoose from 'mongoose';

const alertSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: String, required: true },
    contracted: { type: Boolean, required: true }
  },
  { timestamps: true }
);

const userSchema = mongoose.Schema(
  {
    // add relationship between product and user
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    alert: [alertSchema]
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
