import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KPI Dashboard Builder for Startups",
  description: "Drag-and-drop KPI dashboards for startups. Connect Stripe, Google Analytics, and more. Pre-built templates for common startup metrics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="08543e76-a460-4279-a158-317ea97bba95"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
