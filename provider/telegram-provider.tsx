'use client'
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ITelegramUser, IWebApp } from "@/types/telegram";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { useTheme } from 'next-themes'
export interface ITelegramContext {
  webApp?: IWebApp;
  user?: ITelegramUser;
}

export const TelegramContext = createContext<ITelegramContext>({});

export const TelegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { setTheme } = useTheme()
  const [webApp, setWebApp] = useState<IWebApp | null>(null);

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      app.ready();
      setTheme(app.colorScheme)
      setWebApp(app);
    }
  }, [webApp?.colorScheme]);

  const value = useMemo(() => {
    return webApp
      ? {
        webApp,
        unsafeData: webApp.initDataUnsafe,
        user: webApp.initDataUnsafe.user,
      }
      : {};
  }, [webApp]);

  return (
    <TelegramContext.Provider value={value}>
      {/* <AppRoot> */}
        {children}
      {/* </AppRoot> */}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => useContext(TelegramContext);