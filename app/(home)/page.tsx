'use client'
import { useTelegram } from '@/provider/telegram-provider'
import { Button } from '@telegram-apps/telegram-ui'
import React from 'react'

const HomePage = () => {
    const { user, webApp } = useTelegram()
    console.log(webApp)

  
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user?.username}</h1>
          User data:
          <pre>{JSON.stringify(user, null, 2)}</pre>
          Eniter Web App data:
                  <pre>{JSON.stringify(webApp, null, 2)}</pre>
<Button
  mode="filled"
  size="s"
>
  Action
</Button>
        </div>
      ) : (
        <div>Make sure web app is opened from telegram client <Button
  mode="filled"
  size="s"
>
  Action
</Button></div>
      )}
    </div>
  )
}

export default HomePage