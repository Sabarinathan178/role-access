const User = require('../Model/user_model');
const Role = require('../Model/Role_model');

const checkPermission = (action, resource) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id).populate('roleId');
      const role = await Role.findById(user.roleId).populate('permissions');

      const hasPermission = role.permissions.some(
        (permission) => permission.action === action && permission.resource === resource
      );

      if (!hasPermission) {
        return res.status(403).json({ message: 'Access Denied' });
      }

      next();
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
};

module.exports = checkPermission;
