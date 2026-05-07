import { Chat } from "../models/chat.model.js";

const getChats = async (req, res) => {
    const chats = await Chat.find();
    res.json(chats);
}

const addChat = async (req, res) => {
    const body = req.body;
    await Chat.create({ title: body.title });
    res.json({ status: 'Chat agregado' });
}

const searchChat = async (req, res) => {
    const id = req.params.id;
    const chat = await Chat.findById(id);
    if (!chat) return res.status(404).send('Chat no encontrado');
    res.json(chat);
}

const deleteChat = async (req, res) => {
    const id = req.params.id;
    await Chat.findByIdAndDelete(id);
    res.json({ status: 'Chat eliminado' });
}

export { getChats, addChat, searchChat, deleteChat }