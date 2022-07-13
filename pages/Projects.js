import Link from "next/link"
import project from './api/data.js'
const Projects = () => {

  return (
      <div>
    <div className="text-3xl pl-10">Projects</div>
    <div>

    {
      project.map((info)=>
      <div key={info.key} className="flex flex-col justify-between pt-5 mx-4 xl:mx-auto items-stretch">
        <div className="flex justify-between  py-4 border-black">
        <div className="grow sm:ml-36">{info.title}</div> 
        <div><a href={info.github} className="bg-black border-black sm:border-2 p-px text-white lg:py-2 lg:px-4 rounded-xl mr-2 sm:mr-8">View Code</a></div>
        <div ><Link href={info.redirect}>
            <a className="bg-white box-border border-black border-2 text-black p-px lg:py-2 lg:px-4 rounded-xl sm:mr-28">View Live</a>
            </Link>
            </div>
          </div> 
          <div className="w-full sm:w-9/12 mx-auto" >
          <hr className=""/>
          </div>
      </div>
        )
      }
      </div>

      </div>
  )
}

export default Projects