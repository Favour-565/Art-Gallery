import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="text-[#fff] flex justify-between items-center py-[2%] px-[5%] relative z-[2]">
        <p>Artistic Elegance Gallery</p>

        <ul className="flex justify-between items-center w-[50%]">
            <li><Link href="">Home</Link></li>
            <li><Link href="">About</Link></li>
            <li><Link href="">Gallery</Link></li>
            <li className="border rounded-md my-[2%] py-[1%] w-[100%] text-center"><Link href="/signup" >Get Started</Link></li>
        </ul>

    </nav>
  )
}

export default Navbar