import DashLayout from '@/UI/dashboard/DashLayout'
import DashSettings from '@/components/Dashboard/DashSettings'
import SettingsForm from '@/components/Dashboard/SettingsForm'
import { useRouter } from "next/router"
import React from 'react'

const Settings = () => {

  return (
   <SettingsLayout>
    <>
    <SettingsForm />
    </>   
   </SettingsLayout>
  )

}

export const SettingsLayout = ({children}:any) => {

  return (
    <DashLayout>
      <section className='flex'>
        <DashSettings />
        {children}
      </section>
        
    </DashLayout>
  )
}

export default Settings