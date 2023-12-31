import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Tutorial",
  description: "This is a next.js tutorial website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-theme='dark'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
