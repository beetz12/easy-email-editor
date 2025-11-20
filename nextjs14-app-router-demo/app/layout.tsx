import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Easy Email Editor - Next.js 14 App Router Demo",
  description: "Demonstration of easy-email-editor with Next.js 14 App Router and Server Components",
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
