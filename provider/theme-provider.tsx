// app/providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'
import { useTelegramTheme } from './telegram-theme'

export function Providers({ children }: { children: React.ReactNode }) {
 const theme= useTelegramTheme()
 
  return <ThemeProvider attribute="class" defaultTheme={theme} >{children}</ThemeProvider>
}