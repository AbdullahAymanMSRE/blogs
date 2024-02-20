import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/app/components/nav/Nav";
import Footer from "@/app/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama",
  description: "This is a Fullstack Application created using Next.js Framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
