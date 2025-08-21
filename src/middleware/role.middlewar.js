import CustomError from "../utils/custom.error.js";

const RoleMiddleware = (...roles) => {
  return async (req, res, next) => {
    try {
      const userRole = req.role;
      if (roles.includes(userRole)) {
        return next();
      }
    } catch (error) {
      throw new CustomError("Forbidden Resurse", 401);
    }
  };
};
export default RoleMiddleware;
