import type { Metadata } from "next";
import { Libre_Baskerville, Merriweather } from "next/font/google";
import "./globals.css";

// Load Google Fonts via next/font
const libre = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const merri = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "The History Project",
  description: "AI-driven conversations with historical figures—coming soon!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${libre.variable} ${merri.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* You no longer need a Google Fonts <link> since next/font handles it */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}


