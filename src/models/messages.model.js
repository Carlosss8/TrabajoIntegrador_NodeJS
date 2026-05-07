import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema(
    {
        message: {
            type: String,
            required: true
        },
        chatId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chat",
            required: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Messages = mongoose.model("Messages", messagesSchema)

export { Messages }