import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc Auth user
// @route POST /api/users/login
export const authUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ name: userName });

  if (user && user.password === password) {
    res.json({
      _id: user._id,
      name: user.name,
      address: user.address
    });
  } else {
    // unauthorize
    res.status(401);
    throw new Error('Invalid user or password');
  }
});

// @desc Register a new user
// @route POST /api/users
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { userName: name, password, address } = req.body;
  const userExist = await User.findOne({ name });

  if (userExist) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    password,
    address
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      address: user.address
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});
