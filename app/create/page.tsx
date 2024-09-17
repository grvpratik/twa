import React from 'react'
import { Appbar } from '@/components/appbar'
import ProfileForm from '@/components/form/create-post-form'
import { ModeToggle } from '@/components/theme'
const CreatePage = () => {
  return (<>
    <ModeToggle/>
     <Appbar/>  
     <ProfileForm/></>
  )
}

export default CreatePage