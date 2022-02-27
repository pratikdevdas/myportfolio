import Image from 'next/image'

function Navbar() {
  return (
    <div>
      <nav className="bg-white">
          <div className="h-16 flex items-center justify-around border-b-2 border-black">
         
                    <div className='grow pl-3 text-2xl'>Pratik</div>
                <div className='p-16'> toggle</div>
          </div>
      </nav>

    </div>
  );
}

export default Navbar;
