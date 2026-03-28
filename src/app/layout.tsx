import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

// Display — Cormorant Garamond: cinematic, editorial, emotional
const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

// Body — DM Sans: geometric precision, premium utility, superior legibility
const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: true,
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
    "professional video editing Waterford",
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
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-5 focus:py-3 focus:rounded-full focus:text-sm focus:bg-[var(--gold)] focus:text-[var(--bg)] focus:font-medium"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
