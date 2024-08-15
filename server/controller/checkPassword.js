import bcryptjs from "bcryptjs";
import { userModal } from "../models/UserModel.js";
import jwt from "jsonwebtoken";

const checkPassword = async (req, resp) => {
  try {
    const { password, userId } = req.body;
    const user = await userModal.findById(userId);
    const verifyPassword = await bcryptjs.compare(password, user.password);

    if (!verifyPassword) {
      return resp.status(400).send({
        messsage: "Wrong password,try again",
        success: false,
      });
    }
    const tokenData = {
      id: user._id,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SCRT, {
      expiresIn: "3d",
    });

    const cookieOption = {
      httpOnly: true,
      secure: true,
    };

    return resp.cookie("token", token, cookieOption).status(200).send({
      message: "User logged in successfully",
      token,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return resp.status(500).send({
      message: error.message || error,
      success: false,
    });
  }
};

export default checkPassword;
