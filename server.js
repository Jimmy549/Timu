import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

//MongoDB Connection
connectDB();

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json()); 

const PORT = process.env.PORT || 5000;


//http://localhost:7070/
//http://localhost:7070/api/v1/users

app.use("/api/v1/users",userRoutes); 

//importing routes

import userRoutes from './routes/userRoutes.js';

app.listen(PORT, () => {
  console.log(`Server is listning at port ${PORT} `);
});