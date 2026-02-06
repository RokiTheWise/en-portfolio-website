import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from "@/context/TransitionContext";
import CyberDoors from "@/components/UI/CyberDoors";

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DexDev - Developer Portfolio",
  description:
    "Welcome to Dexter Jethro Enriquez's developer portfolio. Explore my projects, skills, and journey in the world of software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <TransitionProvider>
          <CyberDoors />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
