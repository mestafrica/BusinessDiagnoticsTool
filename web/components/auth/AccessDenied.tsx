// components/auth/AccessDenied.tsx
"use client";
import React from "react";
import { Lock, Home, ArrowLeft } from "lucide-react"; // Using Lucide Icons

// Define the component's props if you wanted to pass custom messages
interface AccessDeniedProps {
  title?: string;
  message?: string;
}

const AccessDenied: React.FC<AccessDeniedProps> = ({
  title = "Access Denied",
  message = "You do not have permission to view this page. Please check your credentials or contact the system administrator if you believe this is an error.",
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 sm:p-6">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl p-8 text-center border-t-8 border-red-600">
        {/* Icon and Error Code */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full inline-block mb-4">
            <Lock className="h-10 w-10 text-red-600" aria-hidden="true" />
          </div>
          <p className="text-6xl font-extrabold text-red-600 mb-2">403</p>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>

        {/* Message */}
        <p className="text-gray-600 mb-8 leading-relaxed">{message}</p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* Back Button (Simulates browser history back) */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
          >
            <ArrowLeft className="h-5 w-5 mr-2" aria-hidden="true" />
            Go Back
          </button>

          {/* Home Button (Replace '/home' with your actual home route) */}
          <a
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
          >
            <Home className="h-5 w-5 mr-2" aria-hidden="true" />
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
