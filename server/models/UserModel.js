import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    videoUrl: {
      type: String,
      default: " ",
    },
    seen: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const MessageModel = mongoose.model("Message", messageSchema);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please provide the name"] },
    email: {
      type: String,
      required: [true, "PLease provide the email"],
    },
    password: {
      type: String,
      required: [true, "Please provide the password"],
    },
    profile_pic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const userModal = mongoose.model("User", userSchema);
