import Button from "../../UI/home/Button"
import HeroCard from "../../UI/home/HeroCard"
import Navbar from "../Nav/Navbar"


const Hero = () => {
  return (
    <HeroCard>
        <>
            <Navbar />
            <section className="text-[#fff] px-[5%] w-[40%] h-[70vh] flex flex-col justify-center  relative z-[2]">
                <div className="w-[30%] h-[2vh] bg-[#fff]"></div>
                <h3 className="hero-text text-[2.5rem] my-[2%]">Bridge the gap between artists and art enthusiast.</h3>
                <p >Rorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button className={"w-[40%]"} text={"Place An Order"} /> 
            </section>
        </>

    </HeroCard>
  )
}

export default Hero