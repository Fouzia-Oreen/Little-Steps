import { ServiceSectionData } from "@/components/home/service/ServiceSectionData"

const ServiceSection = () => {
  return (
    <section className="my-8">
    <div className="text-center py-6">
    <h1 className="text-4xl font-medium my-4 px-3 text-white">Features That Make Us Hero</h1>
    </div>
    <div className="md:w-[60%] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    { ServiceSectionData.map((data) => (
        <>
        <div className="p-4 flex flex-col gap-4  rounded-md cursor-pointer">
            <span className="text-3xl text-orange-400 pl-3">{data.icon}</span>
            <h2 className="text-xl text-blue-500">{data.title}</h2>
            <p className="l text-blue-400">{data.desc}</p>
        </div>
        </>
        ))}
      </div>
    </section>
  )
}

export default ServiceSection
