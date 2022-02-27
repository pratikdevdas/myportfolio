import Image from 'next/image'

export default function Home ({handleToggle}){
    return(
      <div className="grid sm:grid-cols-2 sm:grid-rows-1 justify-center gap-4  sm:py">
        <div className="flex sm:flex-col sm:justify-center sm:items-center py-5 ">
        <div className="px-10">
           <h1 className="text-3xl font-bold ">I am Pratik Dev Das</h1>
           <div>
           I am constantly making web apps to improve my skills and Porfolio. I 
            even convert UI in to CSS .
             </div> 
          <div>
          <a className="bg-black text-white rounded" href="https://drive.google.com/file/d/1hVokppZkgJxDm6xqwOBThCWa6VoLBKOy/view?usp=sharing">📜Resume</a>
          </div>
        </div>
   
      </div>
        <div className="flex justify-center items-center py-5 sm:py-0">
          <div className='sm:p-12 p-6'>
          <Image
           src="/images/left.png"
           alt="Picture of the author"
          width={250}
           height={250}
    />
          </div>
        </div>
      </div>
    )
}