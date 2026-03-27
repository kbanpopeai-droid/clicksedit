import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ClicksEdit — Cinematic Wedding Video Editing",
    template: "%s | ClicksEdit",
  },
  description:
    "Ireland's premier wedding video editing studio. We transform raw footage into cinematic love stories. So you can focus on what you do best.",
  keywords: [
    "wedding video editing",
    "cinematic wedding",
    "video editing Ireland",
    "wedding videographer editing",
    "professional video editing",
  ],
  openGraph: {
    title: "ClicksEdit — Cinematic Wedding Video Editing",
    description:
      "Ireland's premier wedding video editing studio. We transform raw footage into cinematic love stories.",
    url: "https://clicksedit.com",
    siteName: "ClicksEdit",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClicksEdit — Cinematic Wedding Video Editing",
    description:
      "Ireland's premier wedding video editing studio. We transform raw footage into cinematic love stories.",
  },
  metadataBase: new URL("https://clicksedit.com"),
  alternates: { canonical: "https://clicksedit.com" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
