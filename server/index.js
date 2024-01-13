import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/authRoute.js";
import { userRouter } from "./routes/userRoute.js";
import { postRouter } from "./routes/postRoute.js";
import { commentRouter } from "./routes/commentRoute.js";

const app = express();

// Middlewares
app.use(cors({origin: "http://localhost:5173", credentials:true}));
app.use(express.json());
app.use(cookieParser())
app.use("/auth",authRouter)
app.use("/users",userRouter)
app.use("/posts", postRouter)
app.use("/comment", commentRouter)


// Database Connection
const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("Database Connected Successfully"));
  } catch (err) {
    console.error(err);
  }
};

connectDB();

// Starting Server
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
