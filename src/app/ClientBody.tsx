"use client";

import { useEffect } from "react";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  // Mobile warning logic
  useEffect(() => {
    const warning = document.getElementById("mobile-warning");

    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        if (warning) {
          warning.classList.remove("hidden");
          warning.style.display = "flex";
          document.body.style.overflow = "hidden";
        }
      } else {
        if (warning) {
          warning.classList.add("hidden");
          warning.style.display = "none";
        }
        document.body.style.overflow = "";
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      {/* 🔥 Mobile Warning */}
      <div id="mobile-warning" className="hidden">
        <div style={{
          maxWidth: "28rem",
          padding: "2rem",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
          textAlign: "center" as const,
          zIndex: 9999,
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Portfolio Can be best viewed on Desktop
          </h2>
          <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
            For the best experience, please open this portfolio on a laptop computer.
          </p>
          <button
            onClick={() => {
              const warning = document.getElementById("mobile-warning");
              if (warning) warning.classList.add("hidden");
              document.body.style.overflow = "";
            }}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#2563eb",
              color: "white",
              borderRadius: "0.375rem",
              cursor: "pointer",
            }}
          >
            I'm on Desktop
          </button>
        </div>
      </div>

      {/* Page Content */}
      {children}
    </body>
  );
}