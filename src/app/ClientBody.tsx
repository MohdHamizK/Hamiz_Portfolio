"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    document.body.className = "antialiased";
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      {/* 🔥 Mobile Warning Overlay */}
      <div 
        id="mobile-warning" 
        className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black text-center p-6 hidden"
      >
        <div className="max-w-md px-6 py-8 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Portfolio Available on Desktop Only</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            For the best experience, please open this portfolio on a desktop or laptop computer.
          </p>
          <button 
            onClick={() => {
              const warning = document.getElementById("mobile-warning");
              if (warning) warning.classList.add("hidden");
            }} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            I'm on Desktop
          </button>
        </div>
      </div>

      {/* Render page content */}
      {children}
    </body>
  );
}