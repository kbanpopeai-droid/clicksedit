import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClicksEdit — Your Invisible Production Department",
  description:
    "Professional video editing for wedding videographers and commercial creators. We edit. You grow.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
