import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Hamiz K | Data Analytics Portfolio",
  description: "Data Analytics Portfolio for Mohammed Hamiz K - Showcasing skills, projects and experience in data analytics, SQL, Python, and data visualization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* Full-screen Canvas for Interactive Thread */}
        <div id="canvas-wrapper">
          <canvas
            id="threadCanvas"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 999,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          />
          {/* Tooltip shown by InteractiveThread */}
          <div
            id="tooltip"
            className="tooltip"
            style={{
              position: "fixed",
              zIndex: 1000,
              pointerEvents: "none",
              opacity: 0,
              transition: "opacity 0.3s ease",
              background: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "8px 12px",
              borderRadius: "5px",
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
          >
            Click!
          </div>
        </div>

        {/* Your existing layout content */}
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}