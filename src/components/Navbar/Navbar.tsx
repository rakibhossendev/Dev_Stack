import { IoMenu } from "react-icons/io5"
import navLogo from "../../assets/logo-text.png"

export default function Navbar(){

    return (
        <nav className="container mx-auto py-5 sticky top-0 z-50 bg-[#FFFFFF]">
            <div className="flex justify-between">
                <IoMenu className="block md:hidden text-4xl cursor-pointer p-2 "></IoMenu>
                
                <img className="w-fit h-fit" src={navLogo} alt="Navbar logo"/>

                <ul className="hidden md:flex justify-between gap-6">
                    <li><a className="cursor-pointer font-semibold text-md  text-[#DB2777]" href="#">Home</a></li>
                    <li><a className="cursor-pointer font-semibold text-md text-[#64748B] hover:text-[#DB2777]" href="#">Technologies</a></li>
                    <li><a className="cursor-pointer font-semibold text-md text-[#64748B] hover:text-[#DB2777]" href="#">Projects</a></li>
                    <li><a className="cursor-pointer font-semibold text-md text-[#64748B] hover:text-[#DB2777]" href="#">About</a></li>
                    <li><a className="cursor-pointer font-semibold text-md text-[#64748B] hover:text-[#DB2777]" href="#">Contact</a></li>
                </ul>

                <div>
                    <button className="mx-4 p-3 px-3 rounded-2xl text-lg font-bold cursor-pointer ">Sign In</button>
                    <button className=" p-3 px-4 rounded-2xl text-lg font-bold bg-[#DB2777] text-white cursor-pointer hover:bg-[#e5aec7] hover:text-black">Sign Up</button>
                </div>
            </div>

            <hr className="mt-3 text-[#E5E7EB]" />
        </nav>
    )
}