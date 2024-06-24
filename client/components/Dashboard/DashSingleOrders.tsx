import arrow from "@/public/dashboard/arrow.svg"
import Link from "next/link"
import Image from "next/image"
import medium from '@/public/dashboard/medium art.svg'

const DashSingleOrders = () => {
  return (
    <section className="pr-[7%]">
         <div>
            <Link href={'/dashboard/orders'}><Image src={arrow} alt="arrow-left" className='h-[5vh] w-auto' /></Link>
            <div>
                <h3 className="text-[#000] text-[1.1rem]">Order details</h3>
                <div className="flex justify-between mt-[2%] text-[0.9rem]"><span className="w-auto text-[#4F4F4F]">Order No:</span> <span className="text-[#5C6881] w-auto">F711060151001</span></div>
                <div className="flex justify-between mt-[0.5%] text-[0.9rem]"><span className="w-auto text-[#4F4F4F]">Order Date:</span> <span className="text-[#5C6881] w-auto">12 June 2023</span></div>
                <div className="flex justify-between mt-[0.5%] text-[0.9rem]"><span className="w-auto text-[#4F4F4F]">Tracking ID:</span> <span className="text-[#5C6881] w-auto">F711060151001</span></div>
                <div className="flex justify-between mt-[0.5%] text-[0.9rem]"><span className="w-auto text-[#4F4F4F]">Delivery fee:</span> <span className="text-[#5C6881] w-auto">₦ 2,000</span></div>
                <div className="flex justify-between mt-[0.5%] text-[0.9rem]"><span className="w-auto text-[#4F4F4F]">Total:</span> <span className="text-[#5C6881] w-auto">₦ 15,000</span></div>
                <div className='bg-[#888888] h-[1px] mt-[2%]'></div>
            </div>

            <div>
                <h3 className="text-[#000] text-[1.1rem] mt-[1%]">Payment and Delivery Details</h3>
                <div className="flex justify-between mt-[2%] text-[0.9rem]"><span className="w-auto text-[#4F4F4F]">Payment Method:</span> <span className="text-[#5C6881] w-auto">Debit Card</span></div>
                <div className="flex justify-between mt-[0.5%] text-[0.9rem]"><span className="w-auto text-[#4F4F4F]">Delivery Address:</span> <span className="text-[#5C6881] w-auto">32 Rasaq Eletu Way Canal West Residences Osapa London Lekki Phase 2</span></div>
                <div className="flex justify-between mt-[0.5%] text-[0.9rem]"><span className="w-auto text-[#4F4F4F]">Phone Number:</span> <span className="text-[#5C6881] w-auto">08123548661</span></div>
   
                <div className='bg-[#888888] h-[1px] mt-[2%]'></div>
            </div>

            <div className="flex justify-between mt-[2%]">
              <Image src={medium} alt="" className="w-[200px]"/>
              <div className="w-[30%] text-right">
                <h3>Spirit of Nigeria</h3>
                <div className=" mt-[2%] text-[0.9rem]"><span className="w-auto text-[#4F4F4F]">Item Price:</span><br /> <span className="text-[#5C6881] w-auto">₦ 12,000</span></div>
                <div className=" mt-[2%] text-[0.9rem]"><span className="w-auto text-[#4F4F4F]">Artist:</span><br /> <span className="text-[#5C6881] w-auto">Ben David</span></div>
                <div className=" mt-[2%] text-[0.9rem]"><span className="w-auto text-[#4F4F4F]">Quantity:</span><br /> <span className="text-[#5C6881] w-auto">1</span></div>
              </div>
            </div>

            
        </div>

    </section>
  )
}

export default DashSingleOrders