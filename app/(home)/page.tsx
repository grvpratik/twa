'use client'
import { Button } from '@/components/ui/button'
import { useTelegram } from '@/provider/telegram-provider'
import { useTelegramTheme } from '@/provider/telegram-theme'
import { Send } from 'lucide-react'
import { useTheme } from 'next-themes'

import React, { useEffect } from 'react'

const HomePage = () => {
  const { user, webApp } = useTelegram()
  console.log(webApp)
  const { setTheme } = useTheme()
  const telegramTheme = useTelegramTheme()

  useEffect(() => {
    setTheme(telegramTheme)
  }, [telegramTheme, setTheme])

  return (
    <div>
      <div className="min-h-screen bg-white text-black font-sans">
        <header className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <img src="/api/placeholder/40/40" alt="TON Logo" className="w-10 h-10 mr-2" />
            <span className="font-bold text-xl">TON</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-600">Use</a>
            <a href="#" className="hover:text-gray-600">Learn</a>
            <a href="#" className="hover:text-gray-600">Build</a>
            <a href="#" className="hover:text-gray-600">Community</a>
          </nav>
          <div className="flex items-center">
            <span className="mr-2">🌐</span>
            <span>Eng</span>
          </div>
        </header>

        <main className="text-center mt-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Unlock access to 900<br />million <span className="text-blue-500 inline-flex items-center"><Send className="w-12 h-12 mr-2" /> Telegram</span> audience
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Telegram Mini Apps is an open platform for businesses to build
            and deploy crypto-friendly apps and games
          </p>
          <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition duration-300">
            Get started
          </button>
        </main>
      </div>
      {user ? (
        <div>
          <h1>Welcome {user?.username}</h1>
          User data:
          <pre>{JSON.stringify(user, null, 2)}</pre>
          Eniter Web App data:
          <pre>{JSON.stringify(webApp, null, 2)}</pre>
          <Button
            
            className=' mx-5 p-2'
          >
            Action
          </Button>
        </div>
      ) : (
        <div>Make sure web app is opened from telegram client <Button
        
        >
          Action
        </Button></div>
      )}
    </div>
  )
}

export default HomePage