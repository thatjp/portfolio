import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteMeta } from "@/lib/portfolio";
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
  title: {
    default: `${siteMeta.name} — ${siteMeta.role}`,
    template: `%s | ${siteMeta.name}`,
  },
  description: siteMeta.description,
  openGraph: {
    title: `${siteMeta.name} — ${siteMeta.role}`,
    description: siteMeta.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
