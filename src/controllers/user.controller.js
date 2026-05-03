const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(user);
}

const addUser = async (req, res) => {
    const body = req.body;
    await User.create({ name: body.name, email: body.email });
    res.json({ status: 'Usuario agregado' });
}

const searchUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) return res.status(404).send('Usuario no encontrado');
    res.json(user);
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const update = await User.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    res.json({ status: 'Usuario actualizado', update });
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.json({ status: 'Usuario eliminado' });
}

export { getUsers, addUser, searchUser, updateUser, deleteUser }