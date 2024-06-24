import React from 'react'
import search from '@/public/dashboard/search.svg'
import notification from '@/public/dashboard/Notification.svg'
import profile from '@/public/dashboard/profile.svg'
import Image from 'next/image'

const SearchNav = () => {
  return (
    <nav className='py-[2%] flex items-center justify-between pr-[8%]'>
        <div className='border border-[#D0D5DD] border-[1px] rounded-lg w-[30%] flex items-center'>
            <Image src={search} alt="search" className='h-[2vh] w-[auto] ml-[5%]' />
            <input placeholder='search' className='pl-[5%] outline-none'  />
        </div>
        <div className='w-[auto] flex items-center'>
            <Image src={notification} alt="notification" className='h-[2vh] w-[auto] ml-[5%]' />
            <Image src={profile} alt="profile" className='h-[2vh] w-[auto] ml-[5%]' />
            <p className='text-[0.8rem]'>Deborah</p>
        </div>
    
    </nav>
  )
}

export default SearchNav