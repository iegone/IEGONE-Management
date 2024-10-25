const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    jobNumber: { type: String, required: true, unique: true },
    clientName: { type: String, required: true },
    wellNumber: { type: String, required: true },
    jobTypeSurvey: { type: String, required: true },
    depthStart: { type: String, required: true },
    depthEnd: { type: String, required: true },
    date: { type: Date, required: true },
    holeNumber: { type: String, required: true },
    rigNumber: { type: String, required: true },
    rigName: { type: String, required: true },
    rigLocation: { type: String },
    filePath: { type: String, default: "/Documents" },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
