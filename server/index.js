import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
import { UserRouter } from "./routes/login.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/auth", UserRouter);

mongoose.connect("mongodb://127.0.0.1:27017/admin");
//mongodb+srv://psajjitha:sajjitha@cluster0.mnfwwyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});
