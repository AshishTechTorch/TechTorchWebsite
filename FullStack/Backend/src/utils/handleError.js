// One place that turns a thrown error into a proper HTTP response, so that
// bad input (invalid id, failed validation, duplicate) returns 4xx instead of 500
// and internal error details are not leaked to visitors in production.
const sendError = (res, error, fallbackMessage = "Something went wrong") => {
  console.error(fallbackMessage + ":", error && error.message ? error.message : error);

  if (error && error.name === "ValidationError" && error.errors) {
    const message = Object.values(error.errors).map((e) => e.message).join(", ");
    return res.status(400).json({ success: false, message });
  }
  if (error && error.name === "CastError") {
    return res.status(400).json({ success: false, message: "Invalid ID or value format" });
  }
  if (error && error.code === 11000) {
    return res
      .status(409)
      .json({ success: false, message: "Duplicate value: record already exists" });
  }

  const body = { success: false, message: fallbackMessage };
  if (process.env.NODE_ENV !== "production" && error && error.message) body.error = error.message;
  return res.status(500).json(body);
};

module.exports = { sendError };
