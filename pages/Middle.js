import React,{useState} from "react"
import Home from "./Home"
import Projects from "./Projects"
import Blogs from "./Blogs"

export default function Middle(){

    const [visible,setVisible] = useState(0)

    const handleToggle = (event) => {
        event.preventDefault()
        setVisible(0)
    }
    const handleToggle2 = (event) => {
        event.preventDefault()
        setVisible(1)
    }
    const handleToggle3 = (event) => {
        event.preventDefault()
        setVisible(2)
    }

    const pageToView = () => {

        if(visible === 0){
            return <><Home/></>
        }
        else if (visible === 1) {
            return <><Projects/></>
        }
        else{
            return <><Blogs/></>
        }
    }

    return(
        <>
         <div className="bg-white px-4 py-3 flex items-center justify-center  border-gray-200 "> 
        <div>
          <nav className=" flex sm:flex-row relative rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              className="z-10 bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex rounded-l-md items-center px-1 py-1 sm:px-4 sm:py-2 border text-sm font-medium hover:underline"
              onClick={handleToggle}
            >
              Home
            </button>
            <button
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-1 py-1 sm:px-4 sm:py-2 border text-sm font-medium hover:underline"
              onClick={handleToggle2}
            >
              Projects
            </button>
            <button
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 rounded-r-md md:inline-flex relative items-center px-1 py-1 sm:px-4 sm:py-2 border text-sm font-medium hover:underline"
              onClick={handleToggle3}
            >
              Blogs
            </button>   
          </nav>
      </div>
    </div>
    {pageToView()}
        </>
    )
}