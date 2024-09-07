import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Script from "next/script";
import { TelegramProvider } from "@/lib/telegram-provider";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive"></Script>
      </head>
      <body className={inter.className}><TelegramProvider>{children}</TelegramProvider></body>
    </html>
  );
}
