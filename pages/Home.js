import Image from 'next/image'
import Slider from '../components/Slider'

export default function Home ({handleToggle}){
    return(<>

      <div className="grid sm:grid-cols-2 gap-4 h-4800 py-5 sm:py-0">
        <div className="flex sm:flex-col sm:justify-center sm:items-center py-5 sm:py-52">
        <div className="px-10">
           <h1 className="text-3xl font-bold ">I am Pratik Dev Das</h1>
           I am constantly making web apps to improve my skills and Porfolio. I 
            even convert UI in to CSS .
          <a className="bg-black text-white rounded" href="">📜Resume</a>
        </div>
   
      </div>
        <div className="flex justify-center items-center py-5 sm:py-0">
          <div className='sm:p-12 p-6'>
          <Image
           src="/images/left.png"
           alt="Picture of the author"
          width={200}
           height={200}
    />
          </div>
        </div>
      </div>
      <Slider/>
    </>)
}