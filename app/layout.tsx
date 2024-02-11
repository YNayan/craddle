import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Craddle",
  description: "Generate a post,caption",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-black-10">
        <Providers>
          <Navbar/>
          <main className="relative overflow-hidden">{children}</main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
