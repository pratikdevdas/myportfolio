import Link from "next/link";
function Navbar() {
  return (
    <div>
      <nav className="bg-white">
          <div className="h-18 flex items-center justify-around border-b-2 border-black">
         
                    <div className='grow pl-6 text-3xl'><Link href='/'> Pratik</Link></div>
                <div className='p-16'> toggle</div>
          </div>
      </nav>

    </div>
  );
}

export default Navbar;
