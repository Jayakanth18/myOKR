import React from "react";
import { deleteOKR, updateProgress } from "../../../services/okrService";

const OKRList = ({ okrs, setOKRs, onEdit }) => {
  // Handle Delete with confirmation and state update
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this OKR?"
    );
    if (confirmed) {
      try {
        await deleteOKR(id);
        setOKRs((prevOkrs) => prevOkrs.filter((okr) => okr.id !== id));
      } catch (error) {
        console.error("Error deleting OKR:", error);
        alert("Failed to delete OKR. Please try again.");
      }
    }
  };

  // Handle Progress Update with error handling
  const handleProgressUpdate = async (id) => {
    try {
      const updatedOKR = await updateProgress(id);
      setOKRs((prevOkrs) =>
        prevOkrs.map((okr) =>
          okr.id === id ? { ...okr, progress: updatedOKR.progress } : okr
        )
      );
    } catch (error) {
      console.error("Error updating progress:", error);
      alert("Failed to update progress. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        OKR List
      </h2>
      {okrs.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          No OKRs available. Please create one!
        </p>
      ) : (
        okrs.map((okr) => (
          <div
            key={okr.id}
            className="mb-6 p-6 border border-gray-200 rounded-lg shadow-md bg-white hover:bg-gray-50 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {okr.objective}
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Progress: {okr.progress}%
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                aria-label="Edit OKR"
                onClick={() => onEdit(okr)}
                className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
              >
                Edit
              </button>
              <button
                aria-label="Update Progress"
                onClick={() => handleProgressUpdate(okr.id)}
                className="py-2 px-6 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-200"
              >
                Update Progress
              </button>
              <button
                aria-label="Delete OKR"
                onClick={() => handleDelete(okr.id)}
                className="py-2 px-6 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OKRList;
