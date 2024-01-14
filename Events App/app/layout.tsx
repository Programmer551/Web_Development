import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font--poppins",
});

export const metadata: Metadata = {
  title: "Events App",
  description: "Events App is the app to manage events",
  icons: "../assets/icons/logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
