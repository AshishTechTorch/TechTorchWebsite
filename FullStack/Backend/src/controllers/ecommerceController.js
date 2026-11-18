const { sendError } = require("../utils/handleError");
const Ecommerce = require("../models/ecommerce.model");

// ======================================================
// CREATE E-COMMERCE ENQUIRY
// POST /api/ecommerce
// ======================================================

const createEcommerce = async (req, res) => {
  try {
    const {
      serviceAreas,
      objectives,
      currentProjectStage,
      requirementDetails,
      fullName,
      businessEmail,
      companyOrganization,
      phoneNumber,
      preferredContactMethod,
      contactConsent,
    } = req.body;

    // Required fields
    if (
      !fullName ||
      !businessEmail ||
      !companyOrganization ||
      !currentProjectStage ||
      !requirementDetails
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Service areas
    if (
      !Array.isArray(serviceAreas) ||
      serviceAreas.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please select at least one service area.",
      });
    }

    // Objectives
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

    // Consent
    if (contactConsent !== true) {
      return res.status(400).json({
        success: false,
        message:
          "Please agree to be contacted by TechTorch.",
      });
    }

    const ecommerce = await Ecommerce.create({
      serviceAreas,
      objectives,
      currentProjectStage,
      requirementDetails,
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
        "E-Commerce enquiry submitted successfully.",
      data: ecommerce,
    });
  } catch (error) {
    console.error(
      "Create E-Commerce Error:",
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

    return sendError(res, error, "Failed to submit E-Commerce enquiry.");
  }
};


// ======================================================
// GET ALL E-COMMERCE ENQUIRIES
// GET /api/ecommerce
// ======================================================

const getEcommerces = async (req, res) => {
  try {
    const ecommerce =
      await Ecommerce.find().sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      count: ecommerce.length,
      data: ecommerce,
    });
  } catch (error) {
    console.error(
      "Get E-Commerce Enquiries Error:",
      error
    );

    return sendError(res, error, "Failed to fetch E-Commerce enquiries.");
  }
};


// ======================================================
// GET SINGLE E-COMMERCE ENQUIRY
// GET /api/ecommerce/:id
// ======================================================

const getEcommerceById = async (req, res) => {
  try {
    const ecommerce =
      await Ecommerce.findById(req.params.id);

    if (!ecommerce) {
      return res.status(404).json({
        success: false,
        message:
          "E-Commerce enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: ecommerce,
    });
  } catch (error) {
    console.error(
      "Get E-Commerce Error:",
      error
    );

    return sendError(res, error, "Failed to fetch E-Commerce enquiry.");
  }
};


// ======================================================
// UPDATE STATUS
// PATCH /api/ecommerce/:id/status
// ======================================================

const updateEcommerceStatus = async (
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

    const ecommerce =
      await Ecommerce.findByIdAndUpdate(
        req.params.id,
        { status },
        {
          returnDocument: "after",
          runValidators: true,
        }
      );

    if (!ecommerce) {
      return res.status(404).json({
        success: false,
        message:
          "E-Commerce enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "E-Commerce enquiry status updated successfully.",
      data: ecommerce,
    });
  } catch (error) {
    console.error(
      "Update E-Commerce Status Error:",
      error
    );

    return sendError(res, error, "Failed to update E-Commerce status.");
  }
};


// ======================================================
// DELETE E-COMMERCE ENQUIRY
// DELETE /api/ecommerce/:id
// ======================================================

const deleteEcommerce = async (req, res) => {
  try {
    const ecommerce =
      await Ecommerce.findByIdAndDelete(
        req.params.id
      );

    if (!ecommerce) {
      return res.status(404).json({
        success: false,
        message:
          "E-Commerce enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "E-Commerce enquiry deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete E-Commerce Error:",
      error
    );

    return sendError(res, error, "Failed to delete E-Commerce enquiry.");
  }
};


// ======================================================
// EXPORTS
// ======================================================

module.exports = {
  createEcommerce,
  getEcommerces,
  getEcommerceById,
  updateEcommerceStatus,
  deleteEcommerce,
};