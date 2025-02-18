import React from "react";

const VerifyEmailPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-600 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Verify Your Email
        </h1>
        <p className="text-gray-600">
          A verification email has been sent to your email address. Please check
          your inbox and follow the instructions to verify your email.
        </p>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
