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
  alternateName: "DJ Enriquez",
  url: "https://djenriquez.dev",
  image: "https://djenriquez.dev/HeroProfile.png",
  jobTitle: "Software Developer",
  description:
    "Software Developer and Computer Science student at Ateneo de Manila University specializing in Full-stack Web Development.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Ateneo de Manila University",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Digital Logic",
    "Web Development",
    "Software Engineering",
  ],
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
    "Developer portfolio of Dexter Jethro Enriquez, a Computer Science student and Software Developer. Explore projects, skills, and contact information.",
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
    "Ateneo de Manila University",
    "Full-stack Developer",
    "TypeScript",
    "Frontend Engineer",
  ],
  authors: [{ name: "Dexter Jethro Enriquez", url: "https://djenriquez.dev" }],
  creator: "Dexter Jethro Enriquez",
  themeColor: "#FFC300",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dexter Jethro Enriquez | Software Developer",
    description:
      "Developer portfolio of Dexter Jethro Enriquez, a Computer Science student and Software Developer specializing in Next.js and React.",
    url: "https://djenriquez.dev",
    siteName: "Dexter Jethro Enriquez",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dexter Jethro Enriquez Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dexter Jethro Enriquez | Software Developer",
    description:
      "Developer portfolio of Dexter Jethro Enriquez, a Computer Science student and Software Developer.",
    images: ["/twitter-image.png"],
    creator: "@RokiTheWise",
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
