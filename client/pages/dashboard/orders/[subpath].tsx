import DashLayout from '@/UI/dashboard/DashLayout'
import DashSingleOrders from '@/components/Dashboard/DashSingleOrders'
import React from 'react'

const subpath = () => {
  return (
   <DashLayout>
    <DashSingleOrders />
   </DashLayout>
  )
}

export default subpath