import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The History Project",
  description: "Chat with AI avatars of history’s greatest figures",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Load Playfair Display & Open Sans from Google */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
