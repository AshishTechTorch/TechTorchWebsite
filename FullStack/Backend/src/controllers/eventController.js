const { sendError } = require("../utils/handleError");
const Event = require("../models/Event.model");

// CREATE EVENT
const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: event,
    });
  } catch (error) {
    console.error("Create Event Error:", error);

    sendError(res, error, "Something went wrong");
  }
};

// GET ALL EVENTS
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find(req.admin ? {} : { status: { $ne: "draft" } }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error) {
    console.error("Get Events Error:", error);

    sendError(res, error, "Something went wrong");
  }
};

// GET EVENT BY ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event && !req.admin && event.status === "draft") {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    console.error("Get Event Error:", error);

    sendError(res, error, "Something went wrong");
  }
};

// UPDATE EVENT
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: event,
    });
  } catch (error) {
    console.error("Update Event Error:", error);

    sendError(res, error, "Something went wrong");
  }
};

// DELETE EVENT
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.error("Delete Event Error:", error);

    sendError(res, error, "Something went wrong");
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};