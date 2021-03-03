import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc Delete a alert
// @route DELETE /api/alert/:user/:id
export const deleteAlert = asyncHandler(async (req, res) => {
  const { id, user: name } = req.params;
  const user = await User.findOne({ name });

  if (user) {
    const updatedAlert = user.alert.filter((alert) => String(alert._id) !== id);
    user.alert = updatedAlert;
    await user.save();
    res.json({ alert: user.alert, user: user.name, address: user.address });
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});
