"use client";

import { useEffect, useState } from "react";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  const [showAlert, setShowAlert] = useState(true);

  // Hide the alert when user clicks close
  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <body className="antialiased" suppressHydrationWarning>
      {/* Simple Alert Modal */}
      {showAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 text-white p-6">
          <div className="bg-white text-black rounded-lg shadow-xl max-w-md w-full p-6 text-center">
            <h2 className="text-xl font-bold mb-4">View on Laptop or Computer</h2>
            <p className="mb-6">For the best experience, please view this portfolio on a laptop or computer.</p>
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Continue Anyway
            </button>
          </div>
        </div>
      )}

      {/* Page Content */}
      {children}
    </body>
  );
}