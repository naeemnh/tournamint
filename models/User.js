import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  googleId: String,
  name: String,
  email: String,
  profilePicture: String
})

export default mongoose.model('Users', UserSchema);