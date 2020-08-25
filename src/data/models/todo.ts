import mongoose from "mongoose";
import TodoSchema from "../schema/todo";

export default mongoose.model("User", TodoSchema);