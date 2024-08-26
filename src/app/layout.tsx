import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BCT Wrapped",
  description: "Relive your BCT Valorant performance!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="root m-10 min-h-screen justify-items-center text-center">
          {children}
        </main>
      </body>
    </html>
  );
}
