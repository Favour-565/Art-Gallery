import Button from "@/UI/home/Button"
import Link from "next/link"
import Image from "next/image"
import mail from "@/public/home/mail.svg"
import location from "@/public/home/location.svg"



const Footer = () => {
  return (
    <footer className="flex justify-between px-[5%] py-[5%]">
        <section className=" flex flex-col ">
            <span>Artistic Elegance Gallery</span>
            <ul className="grid grid-cols-2 gap-y-3 items-center pb-[2%] mt-[3%] ">
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>

        </section>
        <section className="w-[30%]">
            <h3 className="about-text font-[500] text-[1.2rem]">New’s Letter</h3>
            <p className="text-[0.8rem] font-[400]">get daily update’s about auctions, arts and more</p>
            <form className="flex flex-col my-[2%]">
                <input placeholder="Enter your email" className="border border-[#D5D7DE] rounded-md px-[2%] py-[2%] my-[2%]"/>
                <Button className={"border-[#F2F4F7] bg-[#D5D7DE] w-[40%] text-[#474A56] font-[400]"} text={"Subscribe"} />
            </form>
            <div>
                <span className="text-[0.8rem]">Reach Us</span>
                <ul>
                    <li className="flex items-center my-[2%] text-[0.8rem]"><Image src={mail} alt="email" className="mr-[2%] h-[1.5vh] "/><Link href="" > contact@artisticelegancegallery.com</Link></li>
                    <li className="flex items-center text-[0.8rem]"><Image src={location} alt="email" className="mr-[3%] h-[1.7vh]" />Lagos, Nigeria</li>
                </ul>
            </div>
        </section>
        

    </footer>
  )
}

export default Footer