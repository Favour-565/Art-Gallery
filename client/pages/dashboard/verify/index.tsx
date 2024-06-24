import DashLayout from '@/UI/dashboard/DashLayout'
import Button from '@/UI/home/Button'
import { verifyArtwork } from '@/pages/lib/user'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const verify = () => {
   // Use nullish coalescing operator to handle potential null value
  const userId = typeof window !== "undefined"? localStorage.getItem('userId') as string :'' 
  const router = useRouter()
  const reference = router.query.reference as string

 
  return (
    <DashLayout>
        <>
    <p>verify payment</p> 
        <Button className={'bg-[#0000CD] text-[#fff] py-[1%] w-[30%]'} text={'Verify'}  onClick={() => verifyArtwork(userId, reference)}/>
    </>

    </DashLayout>
    
  )
}

export default verify