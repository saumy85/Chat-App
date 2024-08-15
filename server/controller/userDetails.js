import getUserDetails from "../helpers/getUserDetails.js";

const userDetails = async (req, resp) => {
  try {
    const token = req.cookies.token || "";
    //console.log(req.headers.cookies);
    const user = await getUserDetails(token);
    return resp.status(200).send({
      message: "User details",
      success: true,
      user,
    });
  } catch (error) {
    return resp.status(500).send({
      message: error.message || error,
      success: false,
    });
  }
};

export default userDetails;
