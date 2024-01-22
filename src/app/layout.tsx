import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/homepage/navbar/Navbar";

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
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
