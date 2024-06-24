import Link from "next/link"
import Image from "next/image"
import auction from "@/public/dashboard/auction.svg"
import profile from "@/public/dashboard/profile.svg"
import locationn from "@/public/dashboard/location.svg"
import time from "@/public/dashboard/time.svg"
import like from "@/public/dashboard/like.svg"
import calendar from "@/public/dashboard/calendar.svg"

const AuctionItems = [
    {
        key:"Spirit of Nigeria",
        link:"/dashboard/auction/1",
        src:auction,
        caption:"Spirit of Nigeria",
        artist:"Ben David",
        location:"Abuja",
        lastBid:10000,
        profile:profile

    },
    {
        key:"Spirit of Nigeria",
        link:"/dashboard/auction/2",
        src:auction,
        caption:"Spirit of Nigeria",
        artist:"Ben David",
        location:"Abuja",
        lastBid:10000,
        profile:profile

    },
    {
        key:"Spirit of Nigeria",
        link:"/dashboard/auction/3",
        src:auction,
        caption:"Spirit of Nigeria",
        artist:"Ben David",
        location:"Abuja",
        lastBid:10000,
        profile:profile

    },
    {
        key:"Spirit of Nigeria",
        link:"/dashboard/auction/4",
        src:auction,
        caption:"Spirit of Nigeria",
        artist:"Ben David",
        location:"Abuja",
        lastBid:10000,
        profile:profile

    }
]


const DashAuction = () => {
  return (
    <div>
    <Auction title='Live Auctions' />
    <UpComingAuction title="Upcoming Auctions" />
    </div>
  )
}

export default DashAuction


const Auction = ({title}:any) => {
    return (
        <section className='mb-[2%] '>
         <h3 className='about-text'>{title}</h3>
        <ul className='flex'>
            {AuctionItems.map((item) => (
                <AuctionCard key={item.key} link={item.link} src={item.src} caption={item.caption} profile={item.profile} artist={item.artist} location={item.location} lastBid={item.lastBid}/>
            ))}
        </ul>
   
        </section>
    )
}

const UpComingAuction = ({title}:any) => {
    return (
        <section className='mb-[2%] '>
         <h3 className='about-text'>{title}</h3>
        <ul className='flex'>
            {AuctionItems.map((item) => (
                <UpComingAuctionCard key={item.key} link={item.link} src={item.src} caption={item.caption} profile={item.profile} artist={item.artist} location={item.location} lastBid={item.lastBid}/>
            ))}
        </ul>
   
        </section>
    )
}

const AuctionCard = ({key, link, src, caption,profile, artist, location, lastBid}:any) =>{
    return (
        <Link key={key} href={link} className='flex flex-col justify-center mr-[1%] w-auto auction-overlay'>
            <Image src={src} alt={caption} className=' w-[220px] mt-[3%] rounded-md' />
            <div className="absolute z-[3] flex justify-between w-[220px] mt-[-220px] my-[3%] text-[#fff] text-[0.6rem] px-[1%] ">
                <div className="flex bg-[#FFFFFF29] rounded-md w-[40%] justify-evenly items-center">
                    <Image src={time} alt={'time'} className=' w-[20px] mt-[3%] rounded-md mr-[5%]' />
                    <figcaption className="w-auto">10m 49s</figcaption>
                </div>
                <div className="flex bg-[#FFFFFF29] rounded-md w-auto w-[35%] justify-evenly items-center">
                    <Image src={like} alt={'time'} className=' w-[20px] mt-[3%] rounded-md mr-[5%]' />
                    <figcaption className="w-auto">199</figcaption>
                </div>
            </div>
            <figcaption>{caption}</figcaption>
            <div className="flex my-[1%] text-[0.6rem]">
                <div className="flex items-center ">
                    <Image src={profile} alt={"profile-img"} className=' w-[20px] mt-[3%] rounded-md mr-[5%]' />
                    <figcaption>{artist}</figcaption>
                </div>
                <div className="flex items-center">
                    <Image src={locationn} alt={'location-icon'} className=' w-[20px] mt-[3%] rounded-md' />
                    <figcaption>{location}</figcaption>
                </div>
            </div>
            <div>
                <p className="text-[#EB5757]"><span className="text-[#888888] text-[0.6rem]">Last Bid:</span> ₦{lastBid}</p>
            </div>
        </Link>
    )
}


const UpComingAuctionCard = ({key, link, src, caption,profile, artist, location, lastBid}:any) =>{
    return (
        <Link key={key} href={link} className='flex flex-col justify-center mr-[1%] w-auto auction-overlay'>
            <Image src={src} alt={caption} className=' w-[220px] mt-[3%] rounded-md' />
            <div className="absolute z-[3] flex justify-between w-[220px] mt-[-220px] my-[3%] text-[#fff] text-[0.6rem] px-[1%] ">
                <div className="flex bg-[#FFFFFF29] rounded-md w-[40%] justify-evenly items-center">
                    <Image src={calendar} alt={'calendar'} className=' w-[20px] mt-[3%] rounded-md mr-[5%]' />
                    <figcaption className="w-auto">Oct 27</figcaption>
                </div>
                <div className="flex bg-[#FFFFFF29] rounded-md w-auto w-[35%] justify-evenly items-center">
                    <Image src={like} alt={'time'} className=' w-[20px] mt-[3%] rounded-md mr-[5%]' />
                    <figcaption className="w-auto">199</figcaption>
                </div>
            </div>
            <figcaption>{caption}</figcaption>
            <div className="flex my-[1%] text-[0.6rem]">
                <div className="flex items-center ">
                    <Image src={profile} alt={"profile-img"} className=' w-[20px] mt-[3%] rounded-md mr-[5%]' />
                    <figcaption>{artist}</figcaption>
                </div>
                <div className="flex items-center">
                    <Image src={locationn} alt={'location-icon'} className=' w-[20px] mt-[3%] rounded-md' />
                    <figcaption>{location}</figcaption>
                </div>
            </div>
            <div>
                <p className="text-[#000]"><span className="text-[#888888] text-[0.6rem]">Starting Bid:</span> ₦{lastBid}</p>
            </div>
        </Link>
    )
}


