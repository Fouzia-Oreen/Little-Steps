/* eslint-disable react/jsx-key */
import { InstructorSectionData } from "@/components/home/instructor/InstructorSectionData"
import { Button } from "@/components/ui/button"

const InstructorSection = () => {
  return (
    <section className="flex flex-col md:flex-row lg:w-[80%] mx-auto p-4">

      <div className="flex-1 p-6 gap-4 flex flex-col">
        <h1 className="text-4xl mb-6 font-semibold text-orange-400">Our Professionals</h1>
        <p className="text-xl text-blue-500">Build a portfolio, create a network, and land your dream programming job</p>
        <p className="text-white">Techdegree is a bootcamp-tier program that guides you through a full curriculum that includes a portfolio of curated projects, workshops, quizzes, and access to the exclusive LittleSteps Slack community.</p>
        <Button className="w-fit my-5">Explore</Button>
      </div>
      <div className="flex-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {InstructorSectionData.map((service) => (
          <div className="bg-white rounded-md px-6 py-2">
          <div className="h-[200px] md:w-[220px] flex items-center justify-center">
          <img src={service.src} alt="teacher" key={service.src} className="cover h-full "/></div>
          <h3 className="text-2xl mt-2">{service.name}</h3>
          <p>{service.subject}</p>     
          </div>
       ))}
       </div>
        </div>
    </section>
  )
}

export default InstructorSection
