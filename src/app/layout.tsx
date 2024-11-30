import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google"; // Importing Inter font

const inter = Inter({
  weight: ["400", "500", "600"], // You can choose different weights
  subsets: ["latin"], // Define the subsets you want to use
  variable: "--font-inter", // Custom variable name for Inter
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
