import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-space-grotesk",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-ibm-plex",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-jetbrains",
  display: "swap",
});

const title = "Abubakar Usman — Full-Stack SaaS & AI Developer";
const description =
  "Portfolio of Abubakar Usman, Computer Science student at NUTECH Islamabad building multi-tenant SaaS platforms, live AI products and security tooling.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1020",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abubakar Usman",
  jobTitle: "Full-Stack SaaS Developer",
  email: "mailto:abuxusman911@gmail.com",
  telephone: "+923090003841",
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  alumniOf: "National University of Technology (NUTECH), Islamabad",
  url: "https://residentx.vercel.app",
  sameAs: [
    "https://github.com/abubakar-usman",
    "https://linkedin.com/in/abubakar-usman-654808400",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
