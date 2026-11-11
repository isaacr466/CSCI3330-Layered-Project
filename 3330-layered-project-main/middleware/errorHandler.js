// Middleware layer: handles errors in one consistent place.
export function errorHandler(error, req, res, next) {
  console.error(error);

  if (res.headersSent) {
    return next(error);
  }

  res.status(error.status || 500).json({
    success: false,
    message: error.message || "Internal Server Error.",
  });
}
