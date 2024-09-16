import React from 'react'
import { Gamepad, HomeIcon, Store, User, Workflow } from "lucide-react";
import Link from 'next/link';
const RoutesLayout = ({children}:any) => {
  return (
      <div className=" w-full h-full">
          {children}
          <div className="fixed bg-background shadow-lg border-t border-solid left-0 right-0 bottom-0 flex items-center h-16 justify-between *:px-4 px-4">
              <Link href="/home" className=" flex flex-col gap-1 items-center justify-center ">
                  <span><HomeIcon /></span>
                  <span className=" text-xs font-normal">Home</span>
              </Link>
              <Link href="/store" className=" flex flex-col gap-1 items-center justify-center ">
                  <span><Store /></span>
                  <span className=" text-xs font-normal">Store</span>
              </Link>
              <Link href="/earn" className=" flex flex-col gap-1 items-center justify-center ">
                  <span><Workflow className=" " /></span>
                  <span className=" text-xs font-normal">Task</span>
              </Link>
              <Link href="/profile" className=" flex flex-col gap-1 items-center justify-center ">
                  <span><User /></span>
                  <span className=" text-xs font-normal">User</span>
              </Link>
          </div>
      </div>
  )
}

export default RoutesLayout