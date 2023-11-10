const { StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("../errors");
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log("sei tu?", err);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Something went wrong, please try again later" });
};

module.exports = errorHandlerMiddleware;
