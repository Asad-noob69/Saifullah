import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Saifullah - Build Personal Brands That Generate Qualified Sales Calls",
  description: "Helping agencies and coaches build personal brands that generate qualified sales calls",
  generator: "v0.dev",
  icons: {
    icon: '/favicon.ico', // Automatically linked
    apple: '/apple-touch-icon.png', // Add your Apple touch icon
    // Add other icon types as needed
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-bricolage">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}