import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HavenBakes",
  description: "Premium Butter Cookies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
