import UserSchema from '../schema/user';
import mongoose from "mongoose";

export default mongoose.model("User", UserSchema);