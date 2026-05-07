import { Messages } from "../models/messages.model.js";

const getMessages = async (req, res, next) => {
    try {
        const messages = await Messages.find()
            .populate("userId")
            .populate("chatId");

        res.status(200).json({
            success: true,
            data: messages,
            message: "Mensajes obtenidos correctamente"
        });
    } catch (error) {
        next(error);
    }
};

const getMessagesByChat = async (req, res, next) => {
    try {
        const chatId = req.params.chatId;

        const messages = await Messages.find({ chatId })
            .populate("userId")
            .populate("chatId");

        res.status(200).json({
            success: true,
            data: messages,
            message: "Historial de mensajes obtenido correctamente"
        });
    } catch (error) {
        next(error);
    }
};

const addMessages = async (req, res, next) => {
    try {
        const body = req.body;

        const newMessage = await Messages.create({
            message: body.message,
            chatId: body.chatId,
            userId: body.userId
        });

        res.status(201).json({
            success: true,
            data: newMessage,
            message: "Mensaje enviado correctamente"
        });
    } catch (error) {
        next(error);
    }
};

const updateMessages = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const update = await Messages.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });

        if (!update) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Mensaje no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            data: update,
            message: "Mensaje editado correctamente"
        });
    } catch (error) {
        next(error);
    }
};

const deleteMessages = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedMessage = await Messages.findByIdAndDelete(id);

        if (!deletedMessage) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Mensaje no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            data: deletedMessage,
            message: "Mensaje eliminado correctamente"
        });
    } catch (error) {
        next(error);
    }
};

export { getMessages, getMessagesByChat, addMessages, updateMessages, deleteMessages };