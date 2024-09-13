'use client'

import { useTheme } from 'next-themes'

import React, { useEffect } from 'react'

import ProfileForm from '@/components/form/create-post-form'
import { useTelegram } from '@/provider/telegram-provider'

import { useTelegramTheme } from '@/provider/telegram-theme'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Appbar } from '@/components/appbar'


const HomePage = () => {
  const { user, webApp } = useTelegram()
  console.log(webApp)
  const { setTheme } = useTheme()
  const telegramTheme = useTelegramTheme()

  useEffect(() => {
    setTheme(telegramTheme)
  }, [telegramTheme, setTheme])

  return (
    <div className=' mx-12 flex flex-col p-8'>
   <Appbar/>  
     <ProfileForm/>
      {/* {user ? (
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
      )} */}
    </div>
  )
}

export default HomePage