import { Link } from "react-router-dom"
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="p-4 lg:px-6 h-14 flex items-center border-b-[1px] border-neutral-700 bg-blue-300">
            <Link to={'/'} className="flex items-baseline justify-center ">
            <img src={logo} alt="logo" className=" h-11 w-12 mr-4"/>
            <span className="font-bold text-2xl text-orange-400">Little  Steps</span>
            </Link>
        </header>
  )
}

export default Header
