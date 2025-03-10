const User = require("../models/User");

// Get user details by ID from the request body
exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    // Find the user by ID and return the required fields
    const user = await User.findById(userId, "firstName lastName email");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user: {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch user",
      error: error.message,
    });
  }
};
// Get all users and return selected fields including accountType
exports.getAllUsers = async (req, res) => {
  try {
    // Find all users, selecting firstName, lastName, email, and accountType
    const users = await User.find({}, "firstName lastName email accountType");

    if (!users || users.length === 0) {
      return res.status(404).json({ success: false, message: "No users found" });
    }

    // Format each user with a combined name, email, and account type
    const formattedUsers = users.map(user => ({
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      accountType: user.accountType,
    }));

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      users: formattedUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};
