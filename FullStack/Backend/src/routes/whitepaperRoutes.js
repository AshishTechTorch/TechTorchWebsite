const express = require("express");

const {
  createWhitepaper,
  getAllWhitepapers,
  getWhitepaperById,
  updateWhitepaper,
  deleteWhitepaper,
} = require("../controllers/whitepaperController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const { optionalAuth } = authMiddleware;

router.post("/", authMiddleware, createWhitepaper);
router.get("/", optionalAuth, getAllWhitepapers);
router.get("/:id", optionalAuth, getWhitepaperById);
router.put("/:id", authMiddleware, updateWhitepaper);
router.delete("/:id", authMiddleware, deleteWhitepaper);

module.exports = router;