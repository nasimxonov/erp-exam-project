const errorHandling = (err, req, res, next) => {
  next(res.status(err.status || 500).json(err || "INTERNAL SERVER ERROR"));
};
export default errorHandling;
