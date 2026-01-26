import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nick Welch",
  description: "Sales and account management leader with 10 years driving growth in blockchain and enterprise software.",
  openGraph: {
    title: "Nick Welch",
    description: "Sales and account management leader with 10 years driving growth in blockchain and enterprise software.",
    url: "https://ntwelch.com",
    siteName: "Nick Welch",
    images: [
      {
        url: "https://ntwelch.com/headshot.jpg",
        width: 400,
        height: 400,
        alt: "Nick Welch",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nick Welch",
    description: "Sales and account management leader with 10 years driving growth in blockchain and enterprise software.",
    images: ["https://ntwelch.com/headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}<Analytics /></body>
    </html>
  );
}
