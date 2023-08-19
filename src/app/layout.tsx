import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/site-footer";
import Navbar from "@/components/site-navbar";
import NextThemeProvider from "@/components/next-theme-provider";

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
        <NextThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          <Navbar />
          {children}
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
