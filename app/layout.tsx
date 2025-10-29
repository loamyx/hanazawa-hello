import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teruki Hanazawa - Hello World",
  description: "A confident greeting from Teruki Hanazawa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}