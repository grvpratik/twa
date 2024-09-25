
import Script from "next/script";

import { Inter, Outfit } from "next/font/google";


import { TelegramProvider } from "@/provider/telegram-provider";

import "@/styles/globals.css";
 import '@telegram-apps/telegram-ui/dist/styles.css';
import { Providers } from "@/provider/theme-provider";
import { Wallet } from "@/provider/wallet-provider";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Phudu } from "next/font/google";
import QueryClientWrapper from "@/provider/query-client-provider";
import { AppRoot } from "@telegram-apps/telegram-ui";

const interx = Inter({ subsets: ["latin"] });

const inter = Phudu({ subsets: ["latin"] });
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
      <body className={inter.className}>
        <TelegramProvider>
          <QueryClientWrapper>
            <Providers>
              <Wallet>
                <AppRoot>
                {children}</AppRoot>
              </Wallet>
            </Providers>
          </QueryClientWrapper>
        </TelegramProvider>
      </body>
    </html>
  );
}
