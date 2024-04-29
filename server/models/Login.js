import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: false },
});

const UserModel = mongoose.model("Login", LoginSchema);

export { UserModel as Login };
