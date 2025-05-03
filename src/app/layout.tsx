import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Absolut Tycoon",
  description: "The game of absolute power",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
