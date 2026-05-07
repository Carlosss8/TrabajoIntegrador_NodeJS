import mongoose from "mongoose";
const chatSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Chat = mongoose.model("Chat", chatSchema)

export { Chat }