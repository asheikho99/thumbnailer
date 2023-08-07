import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/site-footer";
import Navbar from "@/components/site-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thumbnailer",
  description: "Get YouTube video's thumbnails using the video id ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
