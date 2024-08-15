export const logout = async (req, resp) => {
  try {
    const cookieOption = {
      httpOnly: true,
      secure: true,
    };

    return resp.cookie("token", "", cookieOption).status(200).send({
      message: "Session time out",
      success: true,
    });
  } catch (error) {
    return resp.status(500).send({
      message: error.message || error,
      error: true,
    });
  }
};
