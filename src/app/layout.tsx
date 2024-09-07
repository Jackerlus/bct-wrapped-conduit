import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BCT Wrapped",
  description: "Relive your BCT Valorant performance!",
};

export function Footer() {
  return (
    <footer className="bg-gray-200 bottom-0 w-screen flex justify-center">
      <ul className="list-none">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/tos">Terms of Service</Link>
        </li>
      </ul>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="en">
      <body className={inter.className}>
        <main className="root m-10 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
