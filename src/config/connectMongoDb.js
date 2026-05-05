import "dotenv/config";
import mongoose from "mongoose"

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conexión a la DB establecida');

    } catch (error) {
        console.log(error.message)
        console.error('Error al conectar a la DB:', error);
    }
}

export { connectMongoDb }