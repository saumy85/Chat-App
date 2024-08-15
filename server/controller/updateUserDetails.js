import getUserDetails from "../helpers/getUserDetails.js";
import { userModal } from "../models/UserModel.js";

export const updateUserDetails = async (req, resp) => {
  try {
    const token = req.cookies.token || "";
    const user = await getUserDetails(token);
    const { name, profile_pic } = req.body;
    const updateUser = await userModal.findByIdAndUpdate(
      { _id: user._id },
      {
        name,
        profile_pic,
      },
      { new: true }
    );

    return resp.status(200).send({
      message: "Profile updated successfully",
      success: true,
      updateUser,
    });
  } catch (error) {
    return resp.status(500).send({
      message: error.message || error,
      success: false,
    });
  }
};
