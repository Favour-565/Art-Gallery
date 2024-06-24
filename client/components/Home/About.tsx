import Image from "next/image"
import auction from '@/public/home/auction.svg'
import purchase from '@/public/home/purchase.svg'
import catalog from '@/public/home/catalog.svg'
import Button from "../../UI/home/Button"

const AboutItems = [
    {
        img:auction,
        title:"Auction System",
        description:"Artists can choose to list their artworks for auction, where users can engage in a competitive and exciting bidding process for the artworks they desire."
    },
    {
        img:purchase,
        title:"Direct Purchase",
        description:"Users can purchase artworks directly at a fixed price set by the artist, with secure payment options integrated for hassle-free transactions."
    },
    {
        img:catalog,
        title:"Artwork Catalog",
        description:"Explore a comprehensive catalog of artworks, offering sorting by categories, styles, and artists, with search and filter options for easy navigation and discovery."
    },

]


const About = () => {
  return (
    <main className="py-[3%] px-[5%] ">
        <h3 className="about-text font-[500] text-[1.5rem]"> About Us</h3>
        <div className="bg-[#000] h-[2px] w-[50px]"></div>
        <div className="flex justify-between pt-[2%]">
            {AboutItems.map((items, index) => (<AboutCard key={index} img={items.img} title={items.title} description={items.description} />))}
            
 
        </div>
        <div className="flex justify-center">
            <Button className={"w-[15%] border-black border-[2px] "} text={"Contact Us"} />
        </div>
        
    
    </main>
  )
}

export default About

interface IAbout {
    img: string,
    title: string,
    description: string
}

const AboutCard = ({img, title, description}: IAbout) => {
    return (
        <section className="flex items-start w-[30%]">
            <Image src={img} alt="auction-gavel" className="w-[40px] h-[40px]" />
            <div className="w-[80%] ml-[3%]">
                <h3 className="about-text text-[0.9rem]">{title}</h3>
                <p className="text-[0.7rem] font-[400] break-all py-[1%]">{description}</p>
            </div>
        </section>
    )
}