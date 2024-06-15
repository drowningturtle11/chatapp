
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/messageRoute.js";
import cors from "cors";
import { app,server } from "./socket/socket.js";

dotenv.config({});



const port=process.env.PORT ||7080;

//midddlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOption={
    origin:'http://localhost:5173',
    credentials:true
};
app.use(cors(corsOption)); 


app.use("/api/v1/user",userRoute)
app.use("/api/v1/message",messageRoute)

server.listen(port,()=>{
    connectDB();
    console.log(`Port number is thiss ${port}`)
})
