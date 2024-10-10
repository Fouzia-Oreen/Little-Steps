import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

//import  footerInfo  from "./footer.js";
const Footer = () => {
    const footerInfo = [
        {
        icon: <CiLocationOn />,
        text:"4517 Washington Ave. Manchester, Kentucky 39495"
        },
        {
        icon: <IoMailOpenOutline />,
        text:"support@littlesteps.com"
        },
        {
        icon: <TbMessage />,
        text:"(207) 555-0119 , (702) 555-0122"
        }
    ]
    const footerSocialIcons = [
      {icon: <Facebook />},
      {icon:  <Instagram />},
      {icon:  <Youtube />},
      {icon: <Twitter />},
    ]
    const footerCourses = [
      {title: "Maths"},
      {title: "Science"},
      {title: "History"},
      {title: "Language"},
      {title: "Computer"},
    ] 
    const footerTiming = [
      {title: "Mon-Sat: 10:00AM - 4.00PM"},
      {title: "Sunday: 10:00AM - 4.00PM"},
      {title: "Friday: Close"},
    ] 
    

  return (
    <footer className="flex flex-col  bg-blue-300 pt-6 overflow-hidden">
    
      <div className="flex flex-col md:flex-row my-4 justify-between gap-6 px-4 lg:px-3">
      {/* logo */}
      <div className="p-4">
      <div className="w-14 h-14">
        <Link to="/"><img src={logo} alt="LOGO" /> </Link>
      </div>
      <h4 className="font-bold text-xl mb-4">Little Steps</h4>
      <p className="text-wrap md:w-[360px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam quasi facilis repellendus iusto!</p>
      </div>
      
      {/* links */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-4 md:gap-12">
      <div className="md:max-w-[300px] w-full ">
        <h4 className="font-semibold text-lg text-blue-950 mb-4">Get In Touch</h4>
        {
          footerInfo.map((item) => (
          <div className="flex items-center gap-4 my-2" key={item.icon}>
          <div className="text-lg">{item.icon}</div> 
          <span className="text-wrap " key={item.text}>{item.text}</span>
          </div>
          ))}
      </div>

      <div className="md:max-w-[300px] w-full ">
          <h4 className="font-semibold text-lg text-blue-950 mb-4">Courses</h4>
          {
          footerCourses.map((item) => (
          <div className=" w-full flex items-start justify-center gap-8 flex-col  " key={item.title}>
          <Link to="/" className="my-2" key={item.title}>{item.title}</Link>
          </div>
          ))}
      </div >    
         
      <div className="flex flex-col items-start justify-center md:max-w-[300px] w-full">
        <h4 className="font-semibold text-lg text-blue-950 mb-4">Office Time</h4>
        {
          footerTiming.map((item) => (
          <div className="flex items-start justify-center gap-8 flex-col text-wrap max-w-[200px]" key={item.title}>
          <span className="my-2 " key={item.title}>{item.title}</span>
          </div>
          ))}
        <div>
        </div>
        <div className="flex gap-3 mt-4">
          {footerSocialIcons.map(item => <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center p-[2px] opacity-70 hover:opacity-100 duration-200 transition cursor-pointer" key={item.icon}><span className="text-blue-400 text-xl font-semibold">{item.icon}</span></div>)}
        </div>
      </div>
      </div>

      </div>
      
      {/* copyright */}
       <div className="bg-blue-200  border-t-[1px] border-blue-400 py-4 text-center font-medium text-sm ">
        <p>Copyright @FOUZIAOREEN All right reserver - {new Date().toDateString()}</p>
       </div>
      
    </footer>
  )
}

export default Footer
