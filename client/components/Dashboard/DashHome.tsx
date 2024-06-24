import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import medium from '@/public/dashboard/medium art.svg'
import ben from '@/public/dashboard/ben.svg'


enum CATEGORY {
    PAINTING = "painting",
    SCULPTURE = "sculpture",
    PHOTOGRAPHY = "photography",
    MIXEDMEDIA = "mixed-media",
    DRAWING = "drawing",
    PRINT = "print",
    OTHER = "other"
}

const DashCategories = [
    {
        key: 'dashboard',
        link: `/dashboard/${CATEGORY.DRAWING}`,
        src: medium,
        caption: CATEGORY.DRAWING.toUpperCase()
    }, 
    {
        key: 'dashboard',
        link: `/dashboard/${CATEGORY.MIXEDMEDIA}`,
        src: medium,
        caption: CATEGORY.MIXEDMEDIA.toUpperCase()
    }, 
    {
        key: 'dashboard',
        link: `/dashboard/${CATEGORY.PHOTOGRAPHY}`,
        src: medium,
        caption: CATEGORY.PHOTOGRAPHY.toUpperCase()
    }, 
    {
        key: 'dashboard',
        link: `/dashboard/${CATEGORY.PAINTING}`,
        src: medium,
        caption: CATEGORY.PAINTING.toUpperCase()
    }, 
    {
        key: 'dashboard',
        link: `/dashboard/${CATEGORY.PRINT}`,
        src: medium,
        caption: CATEGORY.PRINT.toUpperCase()
    }, 
    {
        key: 'dashboard',
        link: `/dashboard/${CATEGORY.SCULPTURE}`,
        src: medium,
        caption: CATEGORY.SCULPTURE.toUpperCase()
    }, 
    {
        key: 'dashboard',
        link: `/dashboard/${CATEGORY.OTHER}`,
        src: medium,
        caption: CATEGORY.OTHER.toUpperCase()
    }, 
   

]



const ArtistItems = [
    {
        key: 'dashboard',
        link: '/dashboard',
        src: ben,
        caption: 'ben'
    }, 
    {
        key: 'auction',
        link: '/dashboard/auction',
        src: ben,
        caption: 'ben'
    },
    {
        key: 'wishlist',
        link: '/dashboard/wishlist',
        src: ben,
        caption: 'ben'
    },
    {
        key: 'orders',
        link: '/dashboard/orders',
        src: ben,
        caption: 'ben'
    },
    {
        key: 'dashboard',
        link: '/dashboard',
        src: ben,
        caption: 'ben'
    }, 
    {
        key: 'auction',
        link: '/dashboard/auction',
        src: ben,
        caption: 'ben'
    },
    {
        key: 'wishlist',
        link: '/dashboard/wishlist',
        src: ben,
        caption: 'ben'
    },
    {
        key: 'orders',
        link: '/dashboard/orders',
        src: ben,
        caption: 'ben'
    }

]


const DashHome = ({artworks}:any) => {
  return (
    <div>
        <HomeArtSection title={'Feature Styles'}/>
        <HomeArtSection title={'Art Categories'} />
        <ArtistSection title={'Popular Artists'} artworks={artworks} />
    </div>
  )
}



export default DashHome

const HomeArtSection = ({title}:any) => {
    return (
        <section className='mb-[2%]'>
         <h3 className='about-text'>{title}</h3>
        <ul className='flex'>
            {DashCategories.map((item, index) => (
                <HomeImageCard key={index} link={item.link} src={item.src} caption={item.caption} />
            ))}
        </ul>
   
        </section>
    )
}

export const ArtistSection = ({title, artworks}:any) => {

    return (
        <section className='my-[2%]'>
         <h3 className='about-text'>{title}</h3>
        <ul className='flex'>
            {artworks?.map((item:any, index:number) => (
                <ArtistImageCard key={index} link={`/dashboard/${item?.category}/${item?.id}`} src={item.artist.profileUrl} caption={item.description} name={item.artist.firstname + ' ' + item.artist.surname}/>
            ))}
        </ul>
   
        </section>
    )
}


const HomeImageCard = ({ link, src, caption}:any) =>{
    return (
        <Link href={link} className='flex flex-col justify-center mr-[1%] text-center w-auto text-[0.8rem]'>
            <Image src={src} alt={caption} className=' w-[180px] mt-[3%]' />
            <figcaption>{caption}</figcaption>
        </Link>
    )
}

const ArtistImageCard = ({link, src, name, caption}:any) =>{
    return (
        <Link href={link} className='flex flex-col justify-center mr-[1%] text-center w-auto text-[0.8rem]'>
            <Image src={src} alt={caption} className=' w-[120px] h-[120px] mt-[3%] ' width={200} height={200} />
            <figcaption>{name}</figcaption>
            <figcaption>{caption}</figcaption>
        </Link>
    )
}