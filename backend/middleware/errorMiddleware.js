const errorHandler = (error, req, res, next) => {
  const status_code = res.status_code ? res.status_code : 500;
  res.status(status_code);

  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
};

module.exports = {
  errorHandler,
};
