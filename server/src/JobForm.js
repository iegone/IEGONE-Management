import React, { useState } from "react";
import { createJob } from "./services/jobService";

const JobForm = () => {
  const [jobDetails, setJobDetails] = useState({
    jobNumber: "",
    clientName: "",
    wellNumber: "",
    jobTypeSurvey: "",
    depthStart: "",
    depthEnd: "",
    date: "",
    holeNumber: "",
    rigNumber: "",
    rigName: "",
    rigLocation: "",
    filePath: "/Documents",
  });

  const handleChange = (e) => {
    setJobDetails({
      ...jobDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilePathChange = async () => {
    try {
      if (window.showDirectoryPicker) {
        const selectedPath = await window.showDirectoryPicker();
        setJobDetails({
          ...jobDetails,
          filePath: selectedPath.name || "/Documents",
        });
      } else {
        setJobDetails({ ...jobDetails, filePath: "/Documents" });
      }
    } catch (error) {
      console.error("Error selecting file path:", error);
      setJobDetails({ ...jobDetails, filePath: "/Documents" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdJob = await createJob(jobDetails);
      console.log("Job created successfully:", createdJob);
      // هنا يمكن تحديث الواجهة أو عرض رسالة نجاح
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Job Details Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* الحقول المدخلة */}
          {[
            { label: "Job Number", name: "jobNumber" },
            { label: "Client Name", name: "clientName" },
            { label: "Well Number", name: "wellNumber" },
            { label: "Job Type Survey", name: "jobTypeSurvey" },
            { label: "Depth Start", name: "depthStart" },
            { label: "Depth End", name: "depthEnd" },
            { label: "Date", name: "date", type: "date" },
            { label: "Hole Number", name: "holeNumber" },
            { label: "Rig Number", name: "rigNumber" },
            { label: "Rig Name", name: "rigName" },
            { label: "Rig Location", name: "rigLocation" },
          ].map(({ label, name, type = "text" }) => (
            <div className="mb-4" key={name}>
              <label className="block text-gray-700 font-semibold mb-2">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={jobDetails[name]}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          ))}

          {/* زر اختيار المسار */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              File Path
            </label>
            <button
              type="button"
              onClick={handleFilePathChange}
              className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Select File Path
            </button>
            <p className="mt-2 text-gray-600">
              Current Path: {jobDetails.filePath}
            </p>
          </div>

          {/* زر الإرسال */}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
          >
            Submit Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
