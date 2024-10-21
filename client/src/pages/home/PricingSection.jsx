import  brand1  from "@/assets/brand1.png"
import  brand2  from "@/assets/brand2.png"
import  brand3  from "@/assets/brand3.png"
import  brand4  from "@/assets/brand4.png"
import  brand5  from "@/assets/brand5.png"
import { PriceSectionData } from "@/components/home/price/PriceSectionData"
import { Button } from "@/components/ui/button"


const PricingSection = () => {
  return (
    <section className="flex flex-col my-9 gap-24">
      <div className="">
       <div className="w-[80%]  mx-auto">
        <h2 className="text-center mb-10 text-6xl text-orange-400">Pricing</h2>
        <div className="flex items-center gap-8 justify-evenly flex-col md:flex-row">
          {PriceSectionData.map((data) => (
            <>
            <div  className="flex flex-col gap-4 p-6 border-[1px] border-blue-500 rounded-md w-[380px] duration-300 cursor-pointer">
              <div className=" text-center mb-8">
              <span className="text-5xl text-center text-orange-400">{data.amount}</span>
              </div>
              <p className="text-xs mb-4">{data.annual}</p>
              <div className=" flex items-center  gap-4 ">
                <span className="text-orange-400 text-lg">{data.icon}</span>
                <p className="text-blue-500">{data.trial}</p>
              </div>
              <div className=" flex items-center  gap-4">
                <span className="text-orange-400 text-lg">{data.icon}</span>
                <p className="text-blue-500">{data.library}</p>
              </div>
              <div className=" flex items-center gap-4">
                <span className="text-orange-400 text-lg">{data.icon}</span>
                <p className="text-blue-500">{data.challenge}</p>
              </div>
              <div className=" flex items-center  gap-4">
                <span className="text-orange-400 text-lg">{data.icon}</span>
                <p className="text-blue-500">{data.tracks}</p>
              </div>
              <Button className="mt-8 bg-blue-400 hover:bg-blue-500"> Start free Trial</Button>
            </div>
            </>
          ))}
        </div>
       </div>
      </div>
      <div className=" bg-blue-400 px-2">
       <div className=" flex flex-wrap py-4  justify-evenly flex-shrink-2">
        <img src={brand1} alt="brand" className="h-[30px]"/>
        <img src={brand2} alt="brand" className="h-[30px]"/>
        <img src={brand3} alt="brand" className="h-[30px]"/>
        <img src={brand4} alt="brand" className="h-[30px]"/>
        <img src={brand5} alt="brand" className="h-[30px]"/>

       </div>
      </div>
      
    </section>
  )
}

export default PricingSection
