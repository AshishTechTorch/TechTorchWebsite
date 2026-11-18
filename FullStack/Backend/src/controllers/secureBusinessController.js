const { sendError } = require("../utils/handleError");
const SecureBusiness = require("../models/SecureBusiness.model");

// ===============================
// CREATE SECURE BUSINESS ENQUIRY
// ===============================
const createSecureBusiness = async (req, res) => {
  try {
    const {
      executiveFullName,
      corporateWorkEmail,
      organizationName,
      industryVertical,
      currentCriticalChallenge,
      targetTimeline,
      infrastructureNotes,
    } = req.body;

    if (
      !executiveFullName ||
      !corporateWorkEmail ||
      !organizationName ||
      !industryVertical ||
      !currentCriticalChallenge ||
      !targetTimeline
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const secureBusiness = await SecureBusiness.create({
      executiveFullName,
      corporateWorkEmail,
      organizationName,
      industryVertical,
      currentCriticalChallenge,
      targetTimeline,
      infrastructureNotes,
    });

    return res.status(201).json({
      success: true,
      message: "Security advisory briefing request submitted successfully.",
      data: secureBusiness,
    });
  } catch (error) {
    console.error("Create Secure Business Error:", error);

    return sendError(res, error, "Failed to submit request.");
  }
};

// ===============================
// GET ALL SECURE BUSINESS ENQUIRIES
// ===============================
const getSecureBusinesses = async (req, res) => {
  try {
    const data = await SecureBusiness.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    console.error("Get Secure Businesses Error:", error);

    return sendError(res, error, "Failed to fetch secure business requests.");
  }
};

// ===============================
// GET SINGLE REQUEST
// ===============================
const getSecureBusinessById = async (req, res) => {
  try {
    const data = await SecureBusiness.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Secure business request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Get Secure Business Error:", error);

    return sendError(res, error, "Failed to fetch request.");
  }
};

// ===============================
// UPDATE STATUS
// ===============================
const updateSecureBusinessStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "new",
      "reviewed",
      "contacted",
      "closed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status.",
      });
    }

    const data = await SecureBusiness.findByIdAndUpdate(
      req.params.id,
      { status },
      { returnDocument: "after", runValidators: true }
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Secure business request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully.",
      data,
    });
  } catch (error) {
    console.error("Update Secure Business Status Error:", error);

    return sendError(res, error, "Failed to update status.");
  }
};

// ===============================
// DELETE REQUEST
// ===============================
const deleteSecureBusiness = async (req, res) => {
  try {
    const data = await SecureBusiness.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Secure business request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Request deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Secure Business Error:", error);

    return sendError(res, error, "Failed to delete request.");
  }
};

module.exports = {
  createSecureBusiness,
  getSecureBusinesses,
  getSecureBusinessById,
  updateSecureBusinessStatus,
  deleteSecureBusiness,
};