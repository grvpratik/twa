'use client'
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ITelegramUser, IWebApp } from "@/types/telegram";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { ApiService } from "@/action/usefetch";

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
  
  const [webApp, setWebApp] = useState<IWebApp | null>(null);

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      app.ready();
     
      
      setWebApp(app);
     ApiService.setAuthToken(app.initData);
      console.log(app)
    }
  }, []);

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