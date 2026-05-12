# TRABAJO FINAL INTEGRADOR

## DESCRIPCIÓN

Aplicación desarrollada en Node.js utilizando Express y MongoDB que implementa una API RESTful para la gestión de usuarios, chats y mensajes.
El proyecto permite realizar operaciones CRUD mediante endpoints HTTP y funciona como backend para una aplicación de chat realizada en React.
La API se encuentra desplegada online mediante Render y utiliza MongoDB Atlas como base de datos en la nube.

-------------------------------------------------------------------------------

# Tecnologías utilizadas

- NodeJS
- Express
- MongoDB Atlas
- Mongoose
- Render
- Bruno
- Dotenv
- Cors

-------------------------------------------------------------------------------

# Estructura del proyecto

trabajointegrador_nodejs/
│
├── src/
│   ├── config/
│   │   └── connectMongoDb.js
│   │
│   ├── controllers/
│   │   ├── chat.controller.js
│   │   ├── messages.controller.js
│   │   └── user.controller.js
│   │
│   ├── middlewares/
│   │   └── error.middleware.js
│   │
│   ├── models/
│   │   ├── chat.model.js
│   │   ├── messages.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── chat.route.js
│   │   ├── messages.route.js
│   │   └── user.route.js
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
└── README.md

## INSTALACION Y EJECUCION
## 1. Clonar el repositorio

git clone https://github.com/Carlosss8/TrabajoIntegrador_NodeJS

## 2. Ingresar a la carpeta del proyecto

cd TrabajoIntegrador_NodeJS

## 3. Instalar dependencia

npm install

## 4. Configuracion de variable de entorno

Crear un archivo .env en la raíz del proyecto:
MONGO_URI=tu_uri_de_mongodb_atlas

## 5. Ejecutar el servidor

- MODO DESARROLLO
npm run dev

- MODO PRODUCCION
npm start

El servidor local se ejecutará en:
http://localhost:3000

- API desplegada online 
https://trabajointegrador-nodejs.onrender.com

## Rutas de la API

- GET /users
- GET /chats
- GET /messages

Obtiene todos los Usuarios/Chats/Mensajes.
![alt text](image.png)
![alt text](image-1.png)

- POST /users
- POST /chats
- POST /messages

Crea una nuevo Usuario/Chat/Mensajes.
![alt text](image-3.png)

Ejemplo Body (JSON):

{
  "name": "Carlos",
  "email": "carlos@gmail.com"
}

- GET /users/
- GET /chats
- GET /messages

Obtiene un Usuarios/Chat/Mensajes por ID.
![alt text](image-4.png)
![alt text](image-5.png)

- DELETE  Usuarios/Chat/Mensajes

Elimina un Usuarios, chats o mensajes

## Integracion frontend con React
- El backend fue preparado para ser consumido desde una aplicación React mediante fetch.

```js
const response = await fetch("https://trabajointegrador-nodejs.onrender.com/users");
const data = await response.json();
console.log(data);
```

## Middleware de errores
La aplicación implementa un middleware personalizado para manejo centralizado de errores:
- errorMiddleware

Permite devolver respuestas controladas en caso de errores internos del servidor.

## Base de datos
El proyecto utiliza MongoDB Atlas con las siguientes colecciones:
- users
- chats
- messages

Cada mensaje contiene referencias a:
- chatId
- userId

mediante ObjectId y populate() de Mongoose.

## AUTOR

NOMBRE: Carlos Rodriguez 
CURSO: Desarrollo con NodeJS

## Fuentes

- Node.js: https://nodejs.org/
- Express: https://expressjs.com/
- Mongoose: https://mongoosejs.com/
- Render: https://render.com/
