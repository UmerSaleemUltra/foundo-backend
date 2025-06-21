import jwt from 'jsonwebtoken';

// create token and saving that in cookies
const sendToken = (user, statusCode, res, message = "") => {
  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user?.phone || "",
    },
    "SMHAU171175", // Secret key
    { expiresIn: "20d" }
  );

  // Options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days
    httpOnly: true,
    sameSite: "Strict",
    secure: true,
  };

  return res
    .status(statusCode)
    .cookie("token", token, options)
    .json({
      data: { user, token },
      status: true,
      message: message || "User logged in successfully",
    });
};

export default sendToken;
