import dotenv from 'dotenv';
import Server from "./Server";

//config env variables
dotenv.config();

const mongo_uri = process.env.MONGO_URI ? process.env.MONGO_URI : '';
const port = Number(process.env.SERVER_PORT)

// Server Instance
const instance = new Server(port, mongo_uri);

// Init Server
instance.startServer();