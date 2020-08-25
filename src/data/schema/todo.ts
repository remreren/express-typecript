import { Schema } from "mongoose";
import timestamps from "mongoose-timestamp";

const TodoSchema: Schema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true
        },
        content: {
            type: String,
            trim: true,
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'in_progress', 'complete'],
            default: 'pending'
        }
    },
    {
        collection: "todos"
    }
);

TodoSchema.plugin(timestamps)

export default TodoSchema;