import mongoose from "mongoose";
const chatsSchema = new mongoose.Schema(
    {

    },
    {
        versionKey: false
    }
);

const Chat = mongoose.model("Chat", userSchema)

export { Chat }