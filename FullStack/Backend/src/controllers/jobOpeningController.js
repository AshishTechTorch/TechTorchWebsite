const { sendError } = require("../utils/handleError");
const JobOpening = require("../models/JobOpening.model");

// CREATE JOB
const createJobOpening = async (req, res) => {
  try {
    const job = await JobOpening.create(req.body);

    res.status(201).json({
      success: true,
      message: "Job opening created successfully",
      data: job,
    });
  } catch (error) {
    console.error("Create Job Error:", error);

    sendError(res, error, "Something went wrong");
  }
};

// GET ALL JOBS
const getAllJobOpenings = async (req, res) => {
  try {
    const jobs = await JobOpening.find(req.admin ? {} : { status: { $ne: "Draft / Unlisted" } }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error("Get Jobs Error:", error);

    sendError(res, error, "Something went wrong");
  }
};

// GET JOB BY ID
const getJobOpeningById = async (req, res) => {
  try {
    const job = await JobOpening.findById(req.params.id);
    if (job && !req.admin && job.status === "Draft / Unlisted") {
      return res.status(404).json({ success: false, message: "Job opening not found" });
    }

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job opening not found",
      });
    }

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    console.error("Get Job Error:", error);

    sendError(res, error, "Something went wrong");
  }
};

// UPDATE JOB
const updateJobOpening = async (req, res) => {
  try {
    const job = await JobOpening.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job opening not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job opening updated successfully",
      data: job,
    });
  } catch (error) {
    console.error("Update Job Error:", error);

    sendError(res, error, "Something went wrong");
  }
};

// DELETE JOB
const deleteJobOpening = async (req, res) => {
  try {
    const job = await JobOpening.findByIdAndDelete(
      req.params.id
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job opening not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job opening deleted successfully",
    });
  } catch (error) {
    console.error("Delete Job Error:", error);

    sendError(res, error, "Something went wrong");
  }
};

module.exports = {
  createJobOpening,
  getAllJobOpenings,
  getJobOpeningById,
  updateJobOpening,
  deleteJobOpening,
};