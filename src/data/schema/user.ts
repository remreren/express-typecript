import { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";
import TodoSchema from "./todo";

const UserSchema: Schema = new Schema(
    {
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true
        },
        first_name: {
            type: String,
            trim: true,
            required: true
        },
        last_name: {
            type: String,
            trim: true,
            required: true
        },
        username: {
            type: String,
            trim: true,
            required: true,
            lowercase: true,
            unique: true,
        }
    },
    {
        collection: "users"
    }
);

UserSchema.plugin(timestamps)

export default UserSchema;