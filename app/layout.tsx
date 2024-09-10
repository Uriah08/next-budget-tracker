import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from 'next/font/google'

import RootProvider from "@/components/providers/RootProvider";

const fontSans = Poppins({
  subsets: ['latin'],
  weight: ['200','300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: "Finince",
  description: "Personal budget tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.className} antialiased`}
      >
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
