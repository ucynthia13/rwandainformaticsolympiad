import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Rwanda Informatics Olympiad",
  description: "Rwanda Informatics Olympiad",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={inter.className} suppressHydrationWarning>
        <body>
          {children}
        </body>
      </html>
  );
}
