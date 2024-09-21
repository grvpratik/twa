import { Button } from '@/components/ui/button'
import React from 'react'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/theme';
import BlurryBlob from '@/components/animata/background/blurry-blob';
const inter =Inter({ subsets: ["latin"] });
const UiPage = () => {
  return (
      <div className=' w-full h-screen p-4 flex flex-col  justify-end relative  overflow-x-hidden'>
          
          <ModeToggle/>
          <h1 className=' text-6xl font-extrabold  text-balance my-4   '>Get <br /> Rewarded <br /> for your contribution</h1>
          <Button className={cn('bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% font-medium tracking-widest rounded-full  text-white', inter.className)}>Get Started</Button>
    </div>
  )
}

export default UiPage