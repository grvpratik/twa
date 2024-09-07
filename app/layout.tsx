
import Script from "next/script";

import { Inter } from "next/font/google";


import { TelegramProvider } from "@/provider/telegram-provider";

import "@/styles/globals.css";
// import '@telegram-apps/telegram-ui/dist/styles.css';
import { Providers } from "@/provider/theme-provider";


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
      <body className={inter.className}><TelegramProvider><Providers>{children}</Providers></TelegramProvider></body>
    </html>
  );
}
