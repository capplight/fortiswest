import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fortis West LLP — Oil Field Equipment & Services",
  description:
    "Fortis West LLP is an oil field equipment trading and service company actively involved in major projects in Kazakhstan. Supplying valves, pumps, pipes, centralizers, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
