/* eslint-disable no-undef */

import { CiLocationOn } from "react-icons/ci";
import { TbMessage } from "react-icons/tb";
import { IoMailOpenOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="flex flex-col px-3  bg-amber-200">
      <div className="flex flex-col md:flex-row my-4 justify-between gap-8">
      {/* logo */}
      <div className="p   *:-4">
      <div className="w-14 h-14 bg-orange-500 ">
        <img src="" alt="LOGO" />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam quasi facilis repellendus iusto!</p>
      </div>
      
      {/* links */}
      <div>
        <h4>Information</h4>
        <div>
        <CiLocationOn />
        <span>support@thetork.com</span>
        </div>
        <div>
        <IoMailOpenOutline />
        <span>support@thetork.com</span>
        </div>
        <div>
        <TbMessage />
        <span>(207) 555-0119</span>
        </div>
      </div>
      <div>
        <h4>
           Get In Touch
        </h4>
      </div>
      <div>
        <h4>
        Recent Post
        </h4>
      </div>
      </div>
      {/* copyright */}
       <div className="bg-orange-300 mt-12 border-t-[1px] border-orange-400 py-2 text-center font-medium text-sm">
        <p>Copyright @FOUZIAOREEN All right reserver - {new Date().toDateString()}</p>
       </div>
    </footer>
  )
}

export default Footer
