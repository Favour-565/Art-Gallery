import React from 'react'
import auction from "@/public/dashboard/auction.svg"
import Image from "next/image"
import Button from '@/UI/home/Button'
import like from "@/public/dashboard/like-black.svg"
import profile from "@/public/dashboard/profile.svg"
import arrow from "@/public/dashboard/arrow.svg"
import Link from 'next/link'



const DashSingleAuction = () => {
  return (
    <section className='flex  pr-[5%]'>
        
        <div className='w-[40%]'>
            <Link href={'/dashboard/auction'}><Image src={arrow} alt="arrow-left" className='h-[5vh] w-auto' /></Link>
            <Image src={auction} alt="art" className='h-[60vh] w-[auto]' />
            <div className='flex justify-evenly py-[1%] '>
                <div className='w-auto'>
                    <span>Last Bid</span>
                    <p className='text-[#EB5757]'>₦10,000</p>
                </div>
                <div className='w-auto'>
                    <span>Next Bid</span>
                    <p className='text-[#27AE60]'>₦12,000</p>
                </div>
            </div>
            <div className='flex items-center justify-center py-[2%]'>
                <Button className={'w-[20px] h-[20px] flex items-center justify-center'} text={'-'} />
                <p className='w-[30%] text-center'>Your bid <br /> ₦ 12,000</p>
                <Button className={'w-[20px] h-[20px] flex items-center justify-center'} text={'+'} />
            </div>
            <p className='text-center'>Each increase is  ₦1,000</p>
            <Button className={'bg-[#0000CD] text-[#fff] py-[2%]'} text={'Take bid ₦ 12,000'} />
        </div>
        <article className='w-[50%] ml-[5%] mt-[3%]'>
            <span className='flex border w-[15%] rounded-md justify-center items-center my-[3%]'><Image src={like} alt="like" className='h-[3vh] w-[auto] mr-[8%]'/>199</span>
            <h3 className='about-text text-[1.3rem] font-[400]'>Spirit of Nigeria</h3>
            <p className='text-[0.8rem] break-all '>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>

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
                        <td className=''>Ben David</td>
                        <td className=''>Abuja</td>
                        <td>Medium Art, Mixed Media</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <span className='text-[#888888] text-[0.8rem]'>Bids</span>
                <div className='flex text-[0.8rem] mt-[2%]'>
                    <Image src={profile} alt="art" className=' w-auto' />
                    <div className='ml-[2%]'>
                        <p><span className='text-[#888888] mr-[2%]'>Bid</span>₦10,000</p>
                        <p><span className='text-[#888888] mr-[2%]'>by</span>Ademide102 <span className='text-[#888888] ml-[2%]'>13:34</span></p>
                    </div>
                </div>
                <div className='flex text-[0.8rem] mt-[2%]'>
                    <Image src={profile} alt="art" className=' w-auto' />
                    <div className='ml-[2%]'>
                        <p><span className='text-[#888888] mr-[2%]'>Bid</span>₦10,000</p>
                        <p><span className='text-[#888888] mr-[2%]'>by</span>Ademide102 <span className='text-[#888888] ml-[2%]'>13:34</span></p>
                    </div>
                </div>
                <div className='flex text-[0.8rem] mt-[2%]'>
                    <Image src={profile} alt="art" className=' w-auto' />
                    <div className='ml-[2%]'>
                        <p><span className='text-[#888888] mr-[2%]'>Bid</span>₦10,000</p>
                        <p><span className='text-[#888888] mr-[2%]'>by</span>Ademide102 <span className='text-[#888888] ml-[2%]'>13:34</span></p>
                    </div>
                </div>
                <div className='flex text-[0.8rem] mt-[2%]'>
                    <Image src={profile} alt="art" className=' w-auto' />
                    <div className='ml-[2%]'>
                        <p><span className='text-[#888888] mr-[2%]'>Bid</span>₦10,000</p>
                        <p><span className='text-[#888888] mr-[2%]'>by</span>Ademide102 <span className='text-[#888888] ml-[2%]'>13:34</span></p>
                    </div>
                </div>
                <div className='flex text-[0.8rem] mt-[2%]'>
                    <Image src={profile} alt="art" className=' w-auto' />
                    <div className='ml-[2%]'>
                        <p><span className='text-[#888888] mr-[2%]'>Bid</span>₦10,000</p>
                        <p><span className='text-[#888888] mr-[2%]'>by</span>Ademide102 <span className='text-[#888888] ml-[2%]'>13:34</span></p>
                    </div>
                </div>
                <div className='flex text-[0.8rem] mt-[2%]'>
                    <Image src={profile} alt="art" className=' w-auto' />
                    <div className='ml-[2%]'>
                        <p><span className='text-[#888888] mr-[2%]'>Bid</span>₦10,000</p>
                        <p><span className='text-[#888888] mr-[2%]'>by</span>Ademide102 <span className='text-[#888888] ml-[2%]'>13:34</span></p>
                    </div>
                </div>

                

            </div>
        </article>

    </section>
  )
}

export default DashSingleAuction