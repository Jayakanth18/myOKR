import React from 'react';
import { deleteOKR, updateProgress } from '../../../services/okrService';

const OKRList = ({ okrs, onEdit }) => {
  const handleDelete = async (id) => {
    await deleteOKR(id);
    window.location.reload(); // Reload to update the list
  };

  const handleProgressUpdate = async (id) => {
    await updateProgress(id);
    window.location.reload(); // Reload to update the progress
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">OKR List</h2>
      {okrs.map((okr) => (
        <div key={okr.id} className="mb-6 p-6 border border-gray-200 rounded-lg shadow-md bg-white hover:bg-gray-50 transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{okr.objective}</h3>
          <p className="text-lg text-gray-600 mb-4">Progress: {okr.progress}%</p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onEdit(okr)}
              className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
            >
              Edit
            </button>
            <button
              onClick={() => handleProgressUpdate(okr.id)}
              className="py-2 px-6 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-200"
            >
              Update Progress
            </button>
            <button
              onClick={() => handleDelete(okr.id)}
              className="py-2 px-6 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OKRList;
