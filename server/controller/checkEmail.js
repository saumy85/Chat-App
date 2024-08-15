import { userModal } from "../models/UserModel.js";

export const checkEmail = async (req, resp) => {
  try {
    const { email } = req.body;
    const checkemail = await userModal.findOne({ email }).select("-password");
    if (!checkemail) {
      return resp.status(400).send({
        message: "Please register first",
        success: false,
      });
    }

    return resp.status(200).send({
      message: "Email verified",
      success: true,
      checkemail,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).send({
      message: error.message || error,
      success: false,
    });
  }
};
