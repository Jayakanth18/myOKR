"use client";

import React, { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import OKRForm from "../components/OKRForm";
import OKRList from "../components/OKRList";
import { getOKRs } from "../../../services/okrService";
import { logout } from "../logout/action";
import { createClient } from "../../../utils/supabase/client";

const Dashboard = () => {
  const [okrs, setOKRs] = useState([]);
  const [selectedOKR, setSelectedOKR] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();

      if (error || !data?.user) {
        redirect("/login");
      }

      const fetchOKRs = async () => {
        const { data, error } = await getOKRs();
        if (error) {
          console.error("Error fetching OKRs:", error);
        } else {
          setOKRs(data);
        }
        setLoading(false);
      };

      fetchOKRs();
    };

    checkUser();
  }, []);

  const handleOKRSave = async () => {
    try {
      const { data, error } = await getOKRs();
      if (error) {
        console.error("Error fetching OKRs:", error);
      } else {
        setOKRs(data);
        setSelectedOKR(null);
      }
    } catch (error) {
      console.error("Error saving OKR:", error);
      alert("Failed to save OKR. Please try again.");
    }
  };

  const handleOKREdit = (okr) => {
    setSelectedOKR(okr);
  };

  if (loading) return <p className="text-center text-xl">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          OKR Dashboard
        </h1>
        <form action={logout}>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full text-sm sm:text-base font-semibold transition"
          >
            Logout
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <OKRForm okr={selectedOKR} onSave={handleOKRSave} />
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Pass `setOKRs` as a prop to OKRList */}
          <OKRList okrs={okrs} setOKRs={setOKRs} onEdit={handleOKREdit} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
