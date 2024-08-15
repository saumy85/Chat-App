import jwt from "jsonwebtoken";
import { userModal } from "../models/UserModel.js";

const getUserDetails = async (token) => {
  if (!token) {
    return {
      message: "session time out",
      lougout: true,
    };
  }
  const decode = await jwt.verify(token, process.env.JWT_SCRT);

  const user = await userModal.findById(decode.id).select("-password");
  return user;
};

export default getUserDetails;
