import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from "@/context/TransitionContext";
import CyberDoors from "@/components/UI/CyberDoors";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dexter Jethro Enriquez",
  url: "https://djenriquez.dev",
  jobTitle: "Software Developer",
  alumniOf: "Ateneo de Manila University",
  sameAs: [
    "https://github.com/RokiTheWise",
    "https://www.linkedin.com/in/dexter-jethro-enriquez-982a062ab/",
    "https://www.instagram.com/dexjet_enriquez/",
    "https://www.facebook.com/dexterjethro.enriquez",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://djenriquez.dev"),
  title: {
    default: "Dexter Jethro Enriquez | Software Developer",
    template: "%s | Dexter Jethro Enriquez",
  },
  description:
    "Developer portfolio of Dexter Jethro Enriquez, a Computer Science student. Explore projects, skills, and contact information.",
  keywords: [
    "Next.js",
    "React",
    "Portfolio",
    "Software Developer",
    "Web Development",
    "Digital Logic",
    "Dexter Jethro Enriquez",
    "Dexter Enriquez",
    "Dexter Jethro",
    "DJ Enriquez",
    "djenriquez",
  ],
  authors: [{ name: "Dexter Jethro Enriquez" }],
  creator: "Dexter Jethro Enriquez",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dexter Jethro Enriquez | Software Developer",
    description:
      "Developer portfolio of Dexter Jethro Enriquez, a Computer Science student.",
    url: "https://djenriquez.dev",
    siteName: "Dexter Jethro Enriquez",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TransitionProvider>
          <CyberDoors />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
