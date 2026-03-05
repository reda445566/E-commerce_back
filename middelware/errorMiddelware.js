// middlewares/errorMiddleware.js

const errorMiddleware = (err, req, res, next) => {

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
 
  // Mongoose Invalid ObjectId
  if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid ID format`;
  }

  // Duplicate Key
  if (err.code === 11000) {
    statusCode = 400;
    message = "Duplicate field value";
  }

  // Validation Error
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map(val => val.message)
      .join(", ");
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack })
  });
};

module.exports = errorMiddleware;