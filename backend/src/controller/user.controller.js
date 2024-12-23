import { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadfileoncloudniary } from "../utils/cloudiary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const generateaccesstokenandrefreshtoken = async (userId) => {
  try {
    const user = await User.findById(userId);

    console.log("User found:", user); // Debug log

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    console.log("access token akash", accessToken);

    user.refreshToken = refreshToken;

    console.log("user in the dtabase ", user);

    await user.save({ validateBeforeSave: true });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const registeruser = asynchandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exists: username, email
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res

  const { username, email, password, adress } = req.body;

  console.log("all usrname are here", username);
  console.log("all  password are here", password);
  console.log("all  adress are here", adress);
  console.log("all  email are here", email);

  if (
    [username, email, password, adress].some((field) => {
      field?.trim() === "";
    })
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const avatarlocalpath = req.files?.avatar[0]?.path;

  let coverImageLocalpath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage && req.files.coverImage.length > 0)
  ) {
    coverImageLocalpath = req.files.coverImage[0].path;
  }

  console.log("avantar local: ", avatarlocalpath);

  const avatar = await uploadfileoncloudniary(avatarlocalpath);
  const coverImage = await uploadfileoncloudniary(coverImageLocalpath);

  console.log(" avatar url akash: ", avatar);
  console.log(" avatar coverImage: ", coverImage);


  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  const user = await User.create({
    username: username.toLowerCase(),
    email,
    adress,
    password,
    avatar: avatar?.url,
    coverImage: coverImage?.url,
  });

  const createduser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createduser) {
    throw new ApiError(404, "wrong while regifjie");
  }

  return res.json(
    new ApiResponse(404, "user registration success", createduser)
  );
});

 

const loggedinUser = asynchandler(async (req, res) => {
  const { username, password, email } = req.body;

  console.log("ritu ", req.body.password);
  console.log("ritu ", req.body.email);
  console.log("ritu ", req.body.username);

  if (!username || !password) {
    throw new ApiError(404, "username or password is invalid");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const { accessToken, refreshToken } =
    await generateaccesstokenandrefreshtoken(user._id);

  const loggedinuser = await User.findOne(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: false,
    
    sameSite: "Lax", // Adjust as needed for cross-site requests
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  };

  console.log("Cookies are being set:");
  console.log("AccessToken:", accessToken);
  console.log("RefreshToken:", refreshToken);
  console.log("Options:", options);

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedinuser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully"
      )
    );
});



const logoutuser = asynchandler(async (req, res) => {
  console.log("Logout Request Headers: ", req.headers);
  console.log("Logout Request Cookies: ", req.cookies);

  console.log(" before removing the refresh token" , req.user);


  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1, // ermove the token
      },
    },
    { new: true }
  );

  console.log("after removing the refresh token" , req.user);
  

  const options = {
    httpOnly: true,
    secure:  false,
    sameSite: 'lax',
  };

  return res
  .status(200)
  .clearCookie("accessToken", options)
  .clearCookie("refreshToken", options)
  .json(new ApiResponse(200, {}, "User logged Out"))

   


});

const RefreshAccessToken = asynchandler(async (req, res) => {
  console.log("Received cookies: ", req.cookies);

  const incomingrefreshToken =
    req.cookies.refreshtoken || req.body.refreshToken;

  if (!incomingrefreshToken) {
    throw new ApiError(404, "not find");
  }

  const decodetoken = jwt.verify(
    incomingrefreshToken,
    process.env.REFRESH_TOKEN_SECRET
  );

  const user = await User.findById(decodetoken._id);

  if (!user) {
    throw new ApiError(401, "Invalid refresh token");
  }

  console.log("rferesh token inside the user", user?.refreshToken);

  if (incomingrefreshToken !== user?.refreshToken) {
    throw new ApiError(404, "refresh token not valid");
  }

  const options = {
    httpOnly: true,
    secure: true,
  };

  const { accessToken, newrefreshtoken } = generateaccesstokenandrefreshtoken(
    user._id
  );

  return res
    .status(200)
    .cookie("newrefreshtokem", newrefreshtoken, options)
    .cookie("accesstoken", accessToken, options)
    .json(
      new ApiError(
        200,
        {
          accessToken,
          refreshtoken: newrefreshtoken,
        },
        "acces toke refresh"
      )
    );
});

const changecurrentpassword = asynchandler(async (req, res) => {
  const { password, newpassword } = req.body;

  const user = await User.findOne(req.user?._id).select("+password");

  console.log("Request body:", req.body);

  const isPasswordcorrect = await user.isPasswordCorrect(password);

  if (!isPasswordcorrect) {
    throw new ApiError(400, "Invalid old password");
  }

  user.password = newpassword;

  await user.save({ validateBeforeSave: true });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

const getCurrentUser = asynchandler(async (req, res) => {
  console.log("user found akash", req.user);

  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "User fetched successfully"));
});

const updateaccountdetail = asynchandler(async (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    throw new ApiError(400, "All fields are required");
  }

  console.log("req username ", req.body.username);
  console.log("req username ", req.body.email);

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        username: username,
        email: email,
      },
    },
    { new: true }
  ).select("-password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"));
});

const updateavatar = asynchandler(async (req, res) => {
  const avatarLocalPath = req.files?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing");
  }

  const Avatar = await uploadfileoncloudniary(avatarLocalPath);

  if (!Avatar.url) {
    throw new ApiError(400, "Error while uploading on avatar");
  }

  const user = await User.findByIdAndUpdate(
    user._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    { new: true }
  ).select(-password);

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar image updated successfully"));
});

export {
  registeruser,
  loggedinUser,
  logoutuser,
  RefreshAccessToken,
  changecurrentpassword,
  updateaccountdetail,
  getCurrentUser,
};
