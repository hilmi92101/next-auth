// main
import type { Metadata } from "next";
import Link from 'next/link';

// misc
import { Inter } from "next/font/google";
import "./globals.css";

// next-auth
import { getServerSession } from 'next-auth';

// components
import Logout from './logout';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          {!!session && <Logout />}
          {!session && <Link href="/login">Login</Link>}
          <Link className="ml-2" href="/register">Register</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
