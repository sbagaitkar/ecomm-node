import express from "express";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./routes/productsRoutes.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
// const __dirname = import.meta.dirname;
app.use(express.json());
app.use(cors());
// app.use(express.static(__dirname + '/client/build'));
app.use("/users", userRouter);
app.use("/products", productRouter)
app.use("/orders", orderRouter)

const MONGODB_URI = process.env.MONGODB_URI
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });



