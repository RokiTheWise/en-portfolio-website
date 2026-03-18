import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Archive",
  description: "A complete log of deployed systems, experiments, and academic coursework by Dexter Jethro Enriquez.",
  openGraph: {
    title: "Project Archive | Dexter Jethro Enriquez",
    description: "A complete log of deployed systems, experiments, and academic coursework.",
    url: "https://djenriquez.dev/archive",
  },
};

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
