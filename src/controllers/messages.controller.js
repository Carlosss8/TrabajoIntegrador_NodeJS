import { Messages } from "../models/messages.model.js";

const getMessages = async (req, res) => {
    const messages = await Messages.find()
        .populate("userId")
        .populate("chatId");

    res.json(messages);
}

const getMessagesByChat = async (req, res) => {
    const chatId = req.params.chatId;

    const messages = await Messages.find({ chatId })
        .populate("userId")
        .populate("chatId");

    res.json(messages);
}

const addMessages = async (req, res) => {
    const body = req.body;
    await Messages.create({ message: body.message, chatId: body.chatId, userId: body.userId });
    res.json({ status: 'Mensaje enviado' });
}

const updateMessages = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const update = await Messages.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    res.json({ status: 'Mensaje editado', update });
}

const deleteMessages = async (req, res) => {
    const id = req.params.id;
    await Messages.findByIdAndDelete(id);
    res.json({ status: 'Mensaje eliminado' });
}

export { getMessages, getMessagesByChat, addMessages, updateMessages, deleteMessages }