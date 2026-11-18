const { sendError } = require("../utils/handleError");
const Transportation = require(
  "../models/transportation.model"
);

// ======================================================
// CREATE TRANSPORTATION ENQUIRY
// POST /api/transportation
// ======================================================

const createTransportation = async (req, res) => {
  try {
    const {
      technologyAreas,
      objectives,
      currentProjectStage,
      requirement,
      fullName,
      businessEmail,
      companyOrganization,
      phoneNumber,
      preferredContactMethod,
      contactConsent,
    } = req.body;

    if (
      !fullName ||
      !businessEmail ||
      !companyOrganization ||
      !currentProjectStage ||
      !requirement
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    if (
      !Array.isArray(technologyAreas) ||
      technologyAreas.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please select at least one technology area.",
      });
    }

    if (
      !Array.isArray(objectives) ||
      objectives.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please select at least one objective.",
      });
    }

    if (contactConsent !== true) {
      return res.status(400).json({
        success: false,
        message:
          "Please agree to be contacted by TechTorch.",
      });
    }

    const transportation =
      await Transportation.create({
        technologyAreas,
        objectives,
        currentProjectStage,
        requirement,
        fullName,
        businessEmail,
        companyOrganization,
        phoneNumber: phoneNumber || "",
        preferredContactMethod:
          preferredContactMethod || "Email",
        contactConsent,
      });

    return res.status(201).json({
      success: true,
      message:
        "Transportation enquiry submitted successfully.",
      data: transportation,
    });
  } catch (error) {
    console.error(
      "Create Transportation Error:",
      error
    );

    if (error.name === "ValidationError") {
      const messages = Object.values(
        error.errors
      ).map((err) => err.message);

      return res.status(400).json({
        success: false,
        message:
          messages[0] || "Validation failed.",
        errors: messages,
      });
    }

    return sendError(res, error, "Failed to submit transportation enquiry.");
  }
};


// ======================================================
// GET ALL TRANSPORTATION ENQUIRIES
// GET /api/transportation
// ======================================================

const getTransportations = async (req, res) => {
  try {
    const transportations =
      await Transportation.find().sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      count: transportations.length,
      data: transportations,
    });
  } catch (error) {
    console.error(
      "Get Transportation Enquiries Error:",
      error
    );

    return sendError(res, error, "Failed to fetch transportation enquiries.");
  }
};


// ======================================================
// GET SINGLE TRANSPORTATION ENQUIRY
// GET /api/transportation/:id
// ======================================================

const getTransportationById = async (
  req,
  res
) => {
  try {
    const transportation =
      await Transportation.findById(
        req.params.id
      );

    if (!transportation) {
      return res.status(404).json({
        success: false,
        message:
          "Transportation enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: transportation,
    });
  } catch (error) {
    console.error(
      "Get Transportation Error:",
      error
    );

    return sendError(res, error, "Failed to fetch transportation enquiry.");
  }
};


// ======================================================
// UPDATE STATUS
// PATCH /api/transportation/:id/status
// ======================================================

const updateTransportationStatus = async (
  req,
  res
) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "new",
      "contacted",
      "in-progress",
      "completed",
      "rejected",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status.",
      });
    }

    const transportation =
      await Transportation.findByIdAndUpdate(
        req.params.id,
        { status },
        {
          returnDocument: "after",
          runValidators: true,
        }
      );

    if (!transportation) {
      return res.status(404).json({
        success: false,
        message:
          "Transportation enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Transportation enquiry status updated successfully.",
      data: transportation,
    });
  } catch (error) {
    console.error(
      "Update Transportation Status Error:",
      error
    );

    return sendError(res, error, "Failed to update transportation status.");
  }
};


// ======================================================
// DELETE TRANSPORTATION ENQUIRY
// DELETE /api/transportation/:id
// ======================================================

const deleteTransportation = async (
  req,
  res
) => {
  try {
    const transportation =
      await Transportation.findByIdAndDelete(
        req.params.id
      );

    if (!transportation) {
      return res.status(404).json({
        success: false,
        message:
          "Transportation enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Transportation enquiry deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete Transportation Error:",
      error
    );

    return sendError(res, error, "Failed to delete transportation enquiry.");
  }
};


module.exports = {
  createTransportation,
  getTransportations,
  getTransportationById,
  updateTransportationStatus,
  deleteTransportation,
};