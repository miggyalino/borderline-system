import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Poppins } from 'next/font/google';
import { Lexend } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterNav from "@/components/FooterNav";

const poppins = Poppins({
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const lexend = Lexend({
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-lexend'
})

export const metadata: Metadata = {
  title: "Bordeline Travel",
  description: "Travel the world with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className=''>
          <Navbar />
          {children}
          <FooterNav />
        </body>
      </html>
    </ClerkProvider>
    
  );
}
