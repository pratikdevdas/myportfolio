import Link from "next/link"
const Projects = () => {
  return (
      <div>
    <div className="text-3xl pl-10">Projects</div>
    <div>

      <div className="flex flex-col justify-between pt-10 items-stretch">
        <div className="flex justify-between  py-4 border-black">
        <div className="grow sm:ml-36">Google Contact Clone</div> 
        <div><a href="https://github.com/pratikdevdas/frontendphonebook" className="bg-black border-black border-2 text-white py-2 px-4 rounded-xl mr-8 sm:mr-8">View Code</a></div>
        <div ><Link href="/projects/Upcoming">
            <a className="bg-white box-border border-black border-2 text-black py-2 px-4 rounded-xl sm:mr-28">Details</a>
            </Link>
            </div>
          </div> 

          <div className="flex justify-between border-t-2 py-4 border-black">
        <div className="grow sm:ml-36">Google Contact Clone</div> 
        <div><a href="https://github.com/pratikdevdas/frontendphonebook" className="bg-black border-black border-2 text-white py-2 px-4 rounded-xl mr-8 sm:mr-8">View Code</a></div>
        <div ><Link href="/projects/Upcoming">
            <a className="bg-white box-border border-black border-2 text-black py-2 px-4 rounded-xl sm:mr-28">Details</a>
            </Link>
            </div>
          </div> 

          <div className="flex justify-between border-t-2 py-4 border-black">
        <div className="grow sm:ml-36">Google Contact Clone</div> 
        <div><a href="https://github.com/pratikdevdas/frontendphonebook" className="bg-black border-black border-2 text-white py-2 px-4 rounded-xl mr-8 sm:mr-8">View Code</a></div>
        <div ><Link href="/projects/Upcoming">
            <a className="bg-white box-border border-black border-2 text-black py-2 px-4 rounded-xl sm:mr-28">Details</a>
            </Link>
            </div>
          </div> 

          <div className="flex justify-between border-t-2 py-4 border-black">
        <div className="grow sm:ml-36">Google Contact Clone</div> 
        <div><a href="https://github.com/pratikdevdas/frontendphonebook" className="bg-black border-black border-2 text-white py-2 px-4 rounded-xl mr-8 sm:mr-8">View Code</a></div>
          <div ><Link href="/projects/Upcoming">
            <a className="bg-white box-border border-black border-2 text-black py-2 px-4 rounded-xl sm:mr-28">Details</a>
            </Link>
            </div>
          </div> 

          <div className="flex justify-between border-t-2 pt-4  border-black">
        <div className="grow sm:ml-36">Google Contact Clone</div> 
        <div><a href="https://github.com/pratikdevdas/frontendphonebook" className="bg-black border-black border-2 text-white py-2 px-4 rounded-xl mr-8 sm:mr-8">View Code</a></div>
        <div ><Link href="/projects/Upcoming">
            <a className="bg-white box-border border-black border-2 text-black py-2 px-4 rounded-xl sm:mr-28">Details</a>
            </Link>
            </div>
          </div> 
          
          <div className="flex justify-center pt-8 pb-24 "><a href="">view more...</a> </div>
      </div>
      </div>

      </div>
  )
}

export default Projects