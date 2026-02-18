import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Voca - Fast, Reliable Recursive Downloader",
  description: "A next-generation, zero-dependency network downloader designed for speed and reliability. Replace wget with a modern alternative.",
  keywords: ["Voca", "Network Downloader", "Recursive Download", "Wget Alternative", "Curl Alternative", "Zero Dependency", "Go Downloader"],
  authors: [{ name: "Ritesh Rana", url: "https://riteshrana.engineer" }],
  creator: "Ritesh Rana",
  metadataBase: new URL("https://voca.riteshrana.engineer/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://voca.riteshrana.engineer/",
    title: "Voca - The Modern Wget Alternative",
    description: "Download the web at warp speed. Zero dependencies, recursive mirroring, and strict security by default.",
    siteName: "Voca",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voca Hero"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Voca - Fast, Reliable Recursive Downloader",
    description: "Download the web at warp speed. Zero dependencies, recursive mirroring.",
    creator: "@riteshrana",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.variable,
        jetbrainsMono.variable,
        "min-h-screen bg-white font-sans text-slate-950 antialiased dark:bg-slate-950 dark:text-slate-50 selection:bg-blue-500 selection:text-white"
      )}>
        {/* Grid Background Overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {children}
      </body>
    </html>
  );
}
