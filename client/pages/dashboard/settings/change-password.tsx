import React from 'react'
import { SettingsLayout } from '.'
import DashOrders from '@/components/Dashboard/DashOrders'
import DashPassword from '@/components/Dashboard/DashPassword'

const password = () => {
  return (
    <SettingsLayout>
    <>
    <DashPassword />
    </>   
   </SettingsLayout>
  )
}

export default password