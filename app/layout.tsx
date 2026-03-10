import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import CursorGlow from "./components/CursorGlow";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prajeet Nithi - AI Innovator & AIML Student",
  description:
    "Prajeet Nithi is a B.Tech AIML student at Karunya Institute of Science and Technology, passionate about building innovative AI and IoT solutions that solve real-world problems.",
  keywords: [
    "Prajeet Nithi",
    "AI Innovator",
    "AIML Student",
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Prajeet Nithi" }],
  creator: "Prajeet Nithi",
  publisher: "Prajeet Nithi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prajeetnithi.github.io",
    title: "Prajeet Nithi - AI Innovator & AIML Student",
    description:
      "Portfolio of Prajeet Nithi, showcasing AI, machine learning, and IoT projects.",
    siteName: "Prajeet Nithi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajeet Nithi - AI Innovator & AIML Student",
    description:
      "B.Tech AIML student building innovative AI and IoT solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://prajeetnithi.github.io" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <CursorGlow />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
