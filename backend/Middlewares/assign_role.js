const assignRole = async (userId, roleId) => {
    const user = await User.findById(userId);
    user.roleId = roleId;
    await user.save();
  };
  