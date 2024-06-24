import React from 'react'
import personGrey from '@/public/dashboard/person-grey.svg'
import passwordGrey from '@/public/dashboard/password-grey.svg'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const AccountSettings = [
    {
        link: '/dashboard/settings',
        src: personGrey,
        text: 'Personal Details'
    }, 
    {
        link: '/dashboard/settings/change-password',
        src: passwordGrey,
        text: 'Password'
    }, 
    
    
]



const DashSettings = () => {
  return (
    <section className='w-[30%]'>
        <h3 className='about-text font-[400]'>Account Settings</h3>
        <ul>
            {AccountSettings.map((item, index) => (
                <SettingList key={index} link={item.link} src={item.src} text={item.text} />
            ))}
        </ul>

    </section>
  )
}

interface SettingsProps {
    link: string;
    src: string;
    text: string;
}

const SettingList = ({link, src, text}: SettingsProps) => {
    const pathname=useRouter().pathname
    return (
        <li className={`mt-[3%] py-[3%] pl-[1%] ${ pathname === link ? "bg-[#9FC7FD]" : ""}`}>
            <Link href={link} className={`flex items-center text-[0.9rem] `}>
                <Image src={src} alt={text} className={`h-[2vh] w-[auto] my-[1%] mr-[3%] `} width={200} height={200}/> 
                {text}
            </Link>
        </li>
    )
}

export default DashSettings