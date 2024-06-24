import DashLayout from "@/UI/dashboard/DashLayout"
import DashHome from "@/components/Dashboard/DashHome"
import { useRouter } from "next/router"
import { getServerSideProps } from '@/pages/dashboard/[dashpath]'


const dashboard = ({artworks}:any) => {
 

  return (
   <DashLayout>
    <DashHome artworks={artworks}  />
   </DashLayout>
         
  )
}

export {getServerSideProps}

export default dashboard