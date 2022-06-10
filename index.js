import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import router from "./routes/router.js";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
     console.log("connected mongodb");
    } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

const app = express();

app.use(express.json())
app.use("/api", router);

app.listen(8080, () => {
  connect();
  console.log("Server run on Port 8080");
});
