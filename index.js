import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRouter from "./routes/auth.js"
import hotelRouter from "./routes/room.js"
import roomRouter from "./routes/hotel.js"
import userRouter from "./routes/user.js"

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, () => {
      console.log("connected mongodb");
    });
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB conntected");
});

const app = express();
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/room",roomRouter)
app.use("/api/hotel",hotelRouter)

app.listen(8080, () => {
  connect();
  console.log("Server run on Port 8080");
});
