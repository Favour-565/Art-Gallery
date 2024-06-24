import React, { useEffect } from 'react'
import auction from "@/public/dashboard/auction.svg"
import Image from "next/image"
import Button from '@/UI/home/Button'
import like from "@/public/dashboard/like-black.svg"
import profile from "@/public/dashboard/profile.svg"
import arrow from "@/public/dashboard/arrow.svg"
import Link from 'next/link'
import moreart from "@/public/dashboard/more-art.svg"
import { useRouter } from 'next/router'
import { getSingleArtwork, payForArtwork } from '@/pages/lib/user'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'




const DashSingleCategory = ({artwork}:any) => {
    const router = useRouter()

    const artId = router.query.subpath as string

        
  return (
    <section className='flex  pr-[5%]'>
        
        <div className='w-[40%]'>
           <Image src={arrow} alt="arrow-left" className='h-[5vh] w-auto' onClick={() => router.back()}/>
            <Image src={artwork?.image || auction} alt="art" className='h-[60vh] w-[auto]' width={200} height={200} />
           
            <div className='fle flex-col items-start justify-center py-[2%]'>
                <h3>{artwork?.name?.toUpperCase()}</h3>
                <p className='text-left'>₦{artwork?.price}</p>
            </div>
            
            <Button className={'bg-[#0000CD] text-[#fff] py-[2%]'} text={'Buy'} onClick={() =>payForArtwork(artId)} />
        </div>
        <article className='w-[50%] ml-[5%] mt-[3%]'>
            <span className='flex border w-[15%] rounded-md justify-center items-center my-[3%]'><Image src={like} alt="like" className='h-[3vh] w-[auto] mr-[8%]'/>199</span>
            <h3 className='about-text text-[1.3rem] font-[400]'>{artwork?.name?.toUpperCase()}</h3>
            <p className='text-[0.8rem] break-all '>{artwork?.description}</p>

            <table>
                <thead>
                    <tr className='flex justify-evenly text-left text-[0.8rem] font-[400] text-[#888888]'>
                        <td>Artist</td>
                        <td>Location</td>
                        <td>Category</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='flex justify-evenly text-[0.8rem] font-[400]'>
                        <td className='flex items-center'><Image src={artwork?.artist?.profileUrl|| profile} alt="art" className='h-[50px] w-[50px] rounded-[50%] w-auto' width={200} height={200}/>{artwork?.artist?.firstname + ' ' + artwork?.artist?.surname}</td>
                        <td className=''>Abuja</td>
                        <td>Medium Art, Mixed Media</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h3 className='text-[1.3rem]'>More Art</h3>
                <div className='flex flex-wrap gap-y-[2%] mt-[3%]'>
                    <Image src={moreart} alt=""  className='w-[180px]'/>
                    <Image src={moreart} alt=""  className='w-[180px]'/>
                    <Image src={moreart} alt=""  className='w-[180px]'/>
                    <Image src={moreart} alt=""  className='w-[180px]'/>
                    <Image src={moreart} alt=""  className='w-[180px]'/>
                    <Image src={moreart} alt=""  className='w-[180px]'/>
                </div>
            
            </div>
        </article>

    </section>
  )
}

export default DashSingleCategory