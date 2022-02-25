import React,{useState} from "react"

export default function Slider(){


    const [visible,setVisible] = useState(true)

    const handleToggle = (event) => {
        event.preventDefault()
        setVisible(!visible)
    }
    

    return(
        <>
         <div>
            <div className='flex justify-center gap-10 py-5'>
            <div>
                <input type="radio" onClick={handleToggle}/>
            </div>
            <div>
                <input type="radio" />
            </div>
            <div>
                <input type="radio" />
            </div>
    
            </div>
            <div className='flex justify-center gap-5'>
            <div>
            <label htmlFor="welcome">Home</label>
            </div>
            <div>
            <label htmlFor="welcome">Projects</label>
            </div>
            <div>
            <label htmlFor="welcome">Blogs</label>
            </div>
    
            </div>
            </div>
        </>
    )
}