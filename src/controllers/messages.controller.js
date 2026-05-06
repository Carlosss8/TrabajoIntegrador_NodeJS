import { Messages } from "../models/messages.model.js";

const getMessages = async (req, res) => {
    const messages = await Messages.find();
    res.json(messages);
}

const addMessages = async (req, res) => {
    const body = req.body;
    await Messages.create({ name: body.messages });
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

export { getMessages, addMessages, updateMessages, deleteMessages }