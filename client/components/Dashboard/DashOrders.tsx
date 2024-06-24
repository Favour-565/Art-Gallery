import React from 'react'
import medium from '@/public/dashboard/medium art.svg'
import Image from 'next/image'
import Button from '@/UI/home/Button'

const DashOrders = ({image,price,reference, date, address}:any) => {
  return (
    <section className='pr-[7%]'>
         <div className='flex justify-between  text-[0.8rem] my-[2%]'>
            <div>
                <Image src={image|| medium} alt="" className='w-[100px]' width={200} height={200} />
                <p className='mt-[1%]'>Total: <span>₦{price}</span></p>
                <p className='mt-[1%]'>Order No: <span className='text-[#5C6881]'>{reference}</span></p>
                <p className='mt-[1%]'>Payment Method: <span className='text-[#5C6881]'>Debit Card</span> </p>

            </div>
            <div className='flex flex-col items-end text-right '>
                <Button className={'bg-[#9FC7FD] rounded-[58px] w-[30%] text-[#0000CD]'} text={'View Details'} />
                <p className='mt-[2%]'>Order Date: <br /> <span className='text-[#5C6881]'>{new Date(date).toLocaleDateString()}</span></p>
                <p className='mt-[2%]'>Delivery Address: <br /> <span className='text-[#5C6881]'>{address}</span></p>

            </div>
        </div>
        
        <div className='bg-[#888888] h-[1px]'></div>
    </section>
   
  )
}

export default DashOrders