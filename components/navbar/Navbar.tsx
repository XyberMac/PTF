import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import  Link  from "next/link";
import { SparklesCore } from "../ui/sparkles";


export default function Navbar() {
  return (
    <div className="w-full flex justify-between p-2 h-[80px] bg-slate-950 z-30">
            <Image className="rounded shadow-sm shadow-[aqua]" alt="logo" src="/logo1.png" width={130} height={50}></Image>
        <div className="links flex w-[40%]  justify-between p-3 items-center font-bold text-aqua]">
            <Link className="transition-colors duration-1000 ease-in hover:text-[springgreen]"  href="">Home</Link>
            <Link className="transition-colors duration-1000 ease-in hover:text-[springgreen]"  href="">About</Link>
            <Link className="transition-colors duration-1000 ease-in hover:text-[springgreen]"  href="">Projects</Link>
            <Link className="transition-colors duration-1000 ease-in hover:text-[springgreen]"  href="">Contact</Link>
            <Link className="transition-colors duration-1000 ease-in hover:text-[springgreen]"  href="">Blog</Link>
        </div>
        <div className="social flex w-[20%] justify-around  items-center text-[aqua] text-4xl transition-colors duration-1000 ease-in">
            <a className=" transition-colors duration-500 ease-in hover:text-[springgreen] " href=""><FaSquareFacebook/></a>
            <a className=" transition-colors duration-500 ease-in hover:text-[springgreen] " href=""><FaSquareXTwitter/></a>
            <a className=" transition-colors duration-500 ease-in hover:text-[springgreen] " href=""><FaInstagramSquare/></a>
            <Link className=" transition-colors duration-500 ease-in hover:text-[springgreen] "   href="" ><MdAttachEmail/></Link>
        </div>
      
    </div>
  )
}