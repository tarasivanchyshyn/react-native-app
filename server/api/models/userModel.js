import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      reqiured: [true, 'Please add a name']
    },
    email: {
      type: String,
      reqiured: [true, 'Please add an email'],
      unique: true
    },
    password: {
      type: String,
      reqiured: [true, 'Please add a password']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const User = mongoose.model('nativeuser', userSchema);
export default User;
