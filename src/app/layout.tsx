import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
 
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Seyma Bayezit Portfolio",
  description: "Seyma Bayezit Frontend Developer Portfolio",
  keywords: "fronetend-developer, website, webdesign"
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <NextIntlClientProvider messages={messages}>
        <Navbar></Navbar>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
