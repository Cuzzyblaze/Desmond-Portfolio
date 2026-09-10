import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://desmonddidacus.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Desmond Didacus — Software Developer",
  description:
    "Software Developer with 5+ years of experience building websites, automated software systems, and high-converting sales funnels. Founder of ICT Result.",
  keywords: [
    "Desmond Didacus",
    "Software Developer",
    "Full Stack Developer Nigeria",
    "ICT Result",
    "Web Developer",
    "Sales Funnel Developer",
  ],
  openGraph: {
    title: "Desmond Didacus — Software Developer",
    description:
      "5+ years building websites, automated software systems, and sales funnels that convert. Founder of ICT Result.",
    url: siteUrl,
    siteName: "Desmond Didacus",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Desmond Didacus — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desmond Didacus — Software Developer",
    description:
      "5+ years building websites, automated software systems, and sales funnels that convert.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
