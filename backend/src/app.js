import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

import dotenv from "dotenv";
import dns from "dns";
dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

//set the DNS server to use Google's public DNS server
dns.setServers(["8.8.8.8"]);

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({ limit: "40kb", extended: true })); 

app.use("/api/v1/users", userRoutes);

const start = async () => {
    const connectionDb = await mongoose.connect(process.env.MONGO_URI);

    console.log(`mongo connected db host: ${connectionDb.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log(`Listening on port ${app.get("port")}`);
    });
}

start();