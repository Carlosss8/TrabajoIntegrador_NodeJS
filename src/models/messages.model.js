import mongoose from "mongoose";
const messagesSchema = new mongoose.Schema(
    {
        message: String
    },
    {
        versionKey: false
    }
);

const Messages = mongoose.model("Messages", messagesSchema)

export { Messages }