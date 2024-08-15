import express from "express";
import cors from "cors";
import dotenv, { config } from "dotenv";
import connectDB from "./config/connectDB.js";
import userRouter from "./routes/userRoutes.js";
import cookiesParser from "cookie-parser";
dotenv.config();
const app = express();

connectDB();
app.use(express.json());
app.use(cookiesParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URI,
    credentials: true,
  })
);

const PORT = process.env.PORT || 8080;

app.get("/", (req, resp) => {
  resp.send({
    message: "HELLo",
  });
});

//Api end points
app.use("/api/v1/user", userRouter);

app.listen(PORT, (req, resp) => {
  console.log("Server is running on port no :" + PORT);
});
