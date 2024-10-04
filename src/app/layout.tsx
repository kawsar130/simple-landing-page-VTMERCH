import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const actOfRejection = localFont({
  src: "./fonts/Act_Of_Rejection.ttf",
  variable: "--font-act-of-rejection",
  weight: "100 900",
});

const inter = localFont({
  src: "./fonts/Inter-Variable.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

const montserrat = localFont({
  src: "./fonts/Montserrat-Variable.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VTMERCH",
  description: "VTMERCH - Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${actOfRejection.variable} ${inter.variable} ${montserrat.variable} antialiased`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
