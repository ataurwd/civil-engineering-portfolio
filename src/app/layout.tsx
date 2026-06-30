import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Redoyan Islam | Civil Engineer Portfolio",
  description: "Professional portfolio of Md. Redoyan Islam, a results-oriented Civil Engineering professional specializing in Structural, Architectural, and MEP systems supervision.",
  keywords: ["Civil Engineer", "Md. Redoyan Islam", "Structural Engineering", "Architectural Supervision", "MEP Systems", "Bangladesh Civil Engineer"],
  authors: [{ name: "Md. Redoyan Islam" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
