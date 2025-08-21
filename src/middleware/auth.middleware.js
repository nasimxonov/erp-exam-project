import JWT from "../service/jwt.service.js";

const jwtservice = new JWT();
const AuthMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization
      ? req.headers.authorization.split(" ")[1]
      : undefined;
    const tokenData = jwtservice.verifyToken(token);
    req.id = tokenData.id;
    req.role = tokenData.role;
    req.roleID = tokenData.id;
    next();
  } catch (error) {
    next(error);
  }
};

export default AuthMiddleware;
