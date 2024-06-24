import DashLayout from "@/UI/dashboard/DashLayout"
import Cart from "@/components/Dashboard/Cart"
import DashAuction from "@/components/Dashboard/DashAuction"
import DashCategories from "@/components/Dashboard/DashCategories"
import { useRouter } from "next/router"


const dashboard = () => {


  return (
   <DashLayout>
    
    <DashAuction /> 

    </DashLayout>
    )
}

export default dashboard