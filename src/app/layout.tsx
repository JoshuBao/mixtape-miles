import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "../components/PostHogProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mixtape Miles",
  description: "Collecting songs and stories from strangers during travel adventures around the world",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/MixtapeMiles.png', type: 'image/png' }
    ],
    apple: { url: '/apple-icon.png', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/MixtapeMiles.png" />
        <link rel="apple-touch-icon" href="/MixtapeMiles.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
