const { sendError } = require("../utils/handleError");
const DataDecision = require("../models/dataDecision.model");

// CREATE
const createDataDecision = async (req, res) => {
  try {
    const {
      executiveFullName,
      corporateWorkEmail,
      enterpriseOrganization,
      primarySolutionFocus,
      architectureScope,
      requestArchitectureConsultation,
    } = req.body;

    const enquiry = await DataDecision.create({
      executiveFullName,
      corporateWorkEmail,
      enterpriseOrganization,
      primarySolutionFocus,
      architectureScope,
      requestArchitectureConsultation,
    });

    return res.status(201).json({
      success: true,
      message: "Data & Decision consultation request submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const msg = Object.values(error.errors).map((e) => e.message).join(", ");
      return res.status(400).json({ success: false, message: msg });
    }

    console.error("Create Data Decision Error:", error);

    return sendError(res, error, "Server error");
  }
};

// GET ALL
const getDataDecisions = async (req, res) => {
  try {
    const enquiries = await DataDecision.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    console.error("Get Data Decisions Error:", error);

    return sendError(res, error, "Server error");
  }
};

// GET BY ID
const getDataDecisionById = async (req, res) => {
  try {
    const enquiry = await DataDecision.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Data & Decision enquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    console.error("Get Data Decision Error:", error);

    return sendError(res, error, "Server error");
  }
};

// UPDATE STATUS
const updateDataDecisionStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const enquiry = await DataDecision.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Data & Decision enquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("Update Status Error:", error);

    return sendError(res, error, "Server error");
  }
};

// DELETE
const deleteDataDecision = async (req, res) => {
  try {
    const enquiry = await DataDecision.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Data & Decision enquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Data & Decision enquiry deleted successfully",
    });
  } catch (error) {
    console.error("Delete Data Decision Error:", error);

    return sendError(res, error, "Server error");
  }
};

module.exports = {
  createDataDecision,
  getDataDecisions,
  getDataDecisionById,
  updateDataDecisionStatus,
  deleteDataDecision,
};