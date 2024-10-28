import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import { Suspense, useEffect } from "react";
import Loading from './loading';
import HiddenFooter from "./Components/HiddenFooter/HiddenFooter";


const openSans = localFont({
  src: "./fonts/OpenSans-VariableFont_wdth,wght.ttf",
  variable: "--font-openSans",
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
      <body className={`${openSans.variable}`}>
        <NextIntlClientProvider messages={messages}>
        <Navbar></Navbar>
          <main className="top">
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </main>
          <section className="emptySection">
            <HiddenFooter></HiddenFooter>
          </section>
          <footer className="footer">
            <Footer></Footer>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
