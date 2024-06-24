import DashLayout from "@/UI/dashboard/DashLayout"
import Cart from "@/components/Dashboard/Cart"
import { useRouter } from "next/router"


const dashboard = () => {


  return (
   <DashLayout>
    <Cart />
   </DashLayout>
         
  
  )
}

export default dashboard