
const express = require("express");
const router = express.Router();

const protect = require("../middlewares/protect");
const rateLimit = require("../middlewares/rateLimit");

const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, message: "Too many login attempts. Please try again in 15 minutes." });
const otpLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, message: "Too many attempts. Please try again in 15 minutes." });
const signupLimiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 10, message: "Too many sign-up attempts. Please try again later." });
const authMiddleware = require("../middlewares/auth.middleware");
const { requireSuperadmin } = authMiddleware;

const {
  registerAdmin,
  registerCandidate,
  getMe,
  loginAdmin,
  forgotPassword,
  verifyOTP,
  resetPassword,
  logoutAdmin,
  getAdminProfile,
} = require("../controllers/authController");

const {
  getAdminById,
  updateAdmin,
  updateAdminPassword,
  toggleAdminStatus,
  deleteAdmin,
} = require("../controllers/adminController");

// ================= AUTH ROUTES =================

router.post("/register", signupLimiter, registerAdmin);
router.post("/register-candidate", signupLimiter, registerCandidate);

router.post("/login", loginLimiter, loginAdmin);
router.post("/forgot-password", otpLimiter, forgotPassword);
router.post("/verify-otp", otpLimiter, verifyOTP);
router.post("/reset-password", otpLimiter, resetPassword);
router.post("/logout", logoutAdmin);

// Get logged-in admin or candidate
router.get("/me", protect, getMe);

// Admin profile
router.get("/profile", authMiddleware, getAdminProfile);

// ================= ADMIN MANAGEMENT ROUTES =================

router.get("/:id", authMiddleware, getAdminById);
router.put("/:id", authMiddleware, updateAdmin);
router.put("/:id/password", authMiddleware, updateAdminPassword);
router.patch("/:id/status", authMiddleware, requireSuperadmin, toggleAdminStatus);
router.delete("/:id", authMiddleware, requireSuperadmin, deleteAdmin);

module.exports = router;
