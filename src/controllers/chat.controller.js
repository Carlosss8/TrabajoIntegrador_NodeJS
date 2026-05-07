import { Chat } from "../models/chat.model.js";

const getChats = async (req, res, next) => {
    try {
        const chats = await Chat.find();

        res.status(200).json({
            success: true,
            data: chats,
            message: "Chats obtenidos correctamente"
        });
    } catch (error) {
        next(error);
    }
};

const addChat = async (req, res, next) => {
    try {
        const body = req.body;
        const newChat = await Chat.create({
            title: body.title
        });

        res.status(201).json({
            success: true,
            data: newChat,
            message: "Chat agregado correctamente"
        });
    } catch (error) {
        next(error);
    }
};

const searchChat = async (req, res, next) => {
    try {
        const id = req.params.id;
        const chat = await Chat.findById(id);

        if (!chat) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Chat no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            data: chat,
            message: "Chat encontrado correctamente"
        });
    } catch (error) {
        next(error);
    }
};

const deleteChat = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedChat = await Chat.findByIdAndDelete(id);

        if (!deletedChat) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Chat no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            data: deletedChat,
            message: "Chat eliminado correctamente"
        });
    } catch (error) {
        next(error);
    }
};

export { getChats, addChat, searchChat, deleteChat };