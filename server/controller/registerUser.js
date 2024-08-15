import { userModal } from "../models/UserModel.js";
import bcryptjs from "bcryptjs";

export const registerUser = async (req, resp) => {
  try {
    const { name, email, password, profile_pic } = req.body;
    const checkEmail = await userModal.findOne({ email });
    if (checkEmail)
      return resp.status(400).send({
        message: "User already resgistered !!",
        error: true,
      });

    const salt = await bcryptjs.genSalt(10);
    const hashpassword = await bcryptjs.hash(password, salt);

    const user = await new userModal({
      name,
      email,
      profile_pic,
      password: hashpassword,
    }).save();

    return resp.status(201).send({
      message: "User created successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return resp.status(500).send({
      message: error.message || error,
      error: true,
    });
  }
};
