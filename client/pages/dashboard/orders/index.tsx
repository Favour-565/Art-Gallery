import DashLayout from '@/UI/dashboard/DashLayout'
import DashOrders from '@/components/Dashboard/DashOrders'
import React from 'react'
import { getServerSideProps } from '@/pages/dashboard/[dashpath]'

const Order = ({orders}:any) => {
  return (
    <DashLayout>
      <>
      {orders.map((order:any, index:number) => (
      <DashOrders image={order.artwork?.image} price={order.artwork?.price} reference={order.paymentReference} date={order.createdAt} address={order.user.address} />
      ))}
     
      </>
     
    </DashLayout>
  )
}

export {getServerSideProps}

export default Order
