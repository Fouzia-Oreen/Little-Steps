import student1 from '@/assets/4.png';
import student2 from '@/assets/5.png';
import student3 from '@/assets/6.png';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section >
    <div className=' flex items-center justify-center '>
      <div className=' md:w-[50%] text-center mt-8 lg:mt-14'>
      <h1 className='lg:text-6xl  font-semibold text-3xl text-orange-400  md:mt-9'>Your Career in Web Development
      Starts Here</h1>
      <p className='my-4 lg:text-lg text-sm text-white'>Our full stack curriculum is free and supported by a passionate open source community.</p>
      <Button varient="default" className="bg-blue-400 hover:bg-blue-500">Explore courses</Button>
      <div className='flex  gap-6 mt-8 items-center justify-center'>
        <img src={student1} alt=""  className='w-[250px] hidden md:block' />
        <img src={student2} alt="" className='w-[280px] pt-8 '/>
        <img src={student3} alt=""  className='w-[250px] hidden md:block'/>
      </div>  
      </div>
    </div>

    </section>
  )
}

export default HeroSection
