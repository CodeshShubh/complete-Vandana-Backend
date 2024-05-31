import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";

// Middleware to make sure only admin is allowed (and use this as a middleware in app.js)
export const adminOnly = TryCatch(async (req, res, next) => {
    // and query routes like - "api/v1/sjksdj?key=24"
  const { id } = req.query;

  if (!id) return next(new ErrorHandler("Please login Yourself as Admin", 401));

  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler("Please Enter Correct Id and Passowrd", 401));
  if (user.role !== "admin")
    return next(new ErrorHandler("Your are not a Admin", 403));

  next();
});
