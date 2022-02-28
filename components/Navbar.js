import Link from "next/link";
import {useTheme} from 'next-themes'
import React,{ useState } from "react";


function Navbar() {
  const {theme, setTheme} = useTheme()
  const [toggle,setToggle] = useState('dark')
 

  function toggleChange(){
    setTheme(theme === 'dark' ? 'light' : 'dark')
    setToggle(toggle === 'light' ? 'dark' : 'light' )
  }

  return (
    <div>
      <nav className="bg-white dark:bg-pblack">
          <div className=" flex items-center justify-around border-b-2 border-black">
                    <div className='grow pl-6 text-3xl'><Link href='/'> Pratik</Link></div>
                <div className='px-16 py-8'> 
              <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="p-3 h-12 w-12 order-2 md:order-3"
               onClick={toggleChange}
                >{toggle} mode</button></div>
          </div>
      </nav>

    </div>
  );
}

export default Navbar;
