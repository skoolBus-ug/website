import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "School Bus — Complete School Management Platform",
  description:
    "One platform to manage every part of your school — transport, academics, fees, health, dormitory, library, canteen, and more.",
  keywords: [
    "school management",
    "school bus tracking",
    "school ERP",
    "Uganda school software",
    "school fees management",
    "student attendance",
    "school transport",
    "school administration",
  ],
  authors: [{ name: "School Bus" }],
  openGraph: {
    type: "website",
    title: "School Bus — Complete School Management Platform",
    description:
      "Bus tracking, academics, fees, health, dormitory, library and more — all under one roof. Built for Ugandan schools.",
    siteName: "School Bus",
    locale: "en_UG",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Bus — Complete School Management Platform",
    description:
      "Bus tracking, academics, fees, health, dormitory, library and more — all under one roof. Built for Ugandan schools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} ${nunito.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
