import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yun Dong Cho - Portfolio",
  description: "Personal portfolio of Yun Dong Cho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
