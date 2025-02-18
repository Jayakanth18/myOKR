"use client";
import React, { useState, useEffect } from "react";
import { createOKR, updateOKR } from "../../../services/okrService";

const OKRForm = ({ okr, onSave }) => {
  const [objective, setObjective] = useState("");
  const [keyResults, setKeyResults] = useState([
    { description: "", progress: 0 },
  ]);

  useEffect(() => {
    if (okr) {
      setObjective(okr.objective || "");
      setKeyResults(okr.key_results || [{ description: "", progress: 0 }]);
    } else {
      // Reset form when switching between OKRs
      setObjective("");
      setKeyResults([{ description: "", progress: 0 }]);
    }
  }, [okr]);

  const handleKeyResultChange = (index, field, value) => {
    setKeyResults((prevKeyResults) =>
      prevKeyResults.map((kr, i) =>
        i === index
          ? {
              ...kr,
              [field]: field === "progress" ? Number(value) || 0 : value,
            }
          : kr
      )
    );
  };

  const addKeyResult = () => {
    setKeyResults([...keyResults, { description: "", progress: 0 }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOKR = { objective, key_results: keyResults };

    try {
      let savedOKR;
      if (okr) {
        savedOKR = await updateOKR(okr.id, newOKR);
      } else {
        savedOKR = await createOKR(newOKR);
      }
      onSave(savedOKR); // Ensure parent state updates with correct OKR
    } catch (error) {
      console.error("Error saving OKR:", error);
      alert("Failed to save OKR. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 border rounded-lg shadow-lg bg-white"
    >
      <h2 className="text-2xl font-semibold text-center mb-4">
        {okr ? "Edit OKR" : "Create OKR"}
      </h2>

      <div className="mb-4">
        <label
          htmlFor="objective"
          className="block text-lg font-medium text-gray-700"
        >
          Objective
        </label>
        <input
          id="objective"
          type="text"
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
          placeholder="Objective"
          required
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Results</h3>

      {keyResults.map((kr, index) => (
        <div key={index} className="mb-4 space-y-4">
          <div>
            <label className="block text-md font-medium text-gray-700">
              Key Result Description
            </label>
            <input
              type="text"
              value={kr.description}
              onChange={(e) =>
                handleKeyResultChange(index, "description", e.target.value)
              }
              placeholder="Key Result Description"
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700">
              Progress (%)
            </label>
            <input
              type="number"
              value={kr.progress}
              onChange={(e) =>
                handleKeyResultChange(index, "progress", e.target.value)
              }
              placeholder="Progress"
              min="0"
              max="100"
              required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ))}

      <div className="mb-4">
        <button
          type="button"
          onClick={addKeyResult}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          Add Key Result
        </button>
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default OKRForm;
