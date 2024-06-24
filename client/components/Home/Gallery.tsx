import Button from "@/UI/home/Button"


const Gallery = () => {
  return (
    <main className="py-[3%] px-[5%]">
        <h3 className="about-text font-[500] text-[1.5rem]"> Gallery </h3>
        <div className="bg-[#000] h-[2px] w-[50px]"></div>

        <section className="gallery  h-[100vh] my-[1%]">
            <div className="gal-1 "></div>
            <div className="gal-2 "></div>
            <div className="gal-3 "></div>
            <div className="gal-4 "></div>
            <div className="gal-5 "></div>
            <div className="gal-6"></div>
            <div className="gal-7 "></div>
        </section>

        <div className="flex justify-center">
            <Button className={"w-[15%] border-black border-[2px] "} text={"View Full Gallery"} />
        </div>

    </main>
  )
}

export default Gallery