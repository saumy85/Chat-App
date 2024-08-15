import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MOngoDb Database ${connect.connection.host}`);
  } catch (error) {
    console.warn(`Error in Mongodb ${error}`);
  }
};

export default connectDB;
