import Image from "next/image";

function Footer() {
  return (
        <div className='border-t-2 border-black relative'>
            <div className='flex justify-center'>
                    <div className=' mt-3 w-20 h-6 bg-black rounded-md text-center text-white'>
                        Lets Connect
                   </div> 
            </div>
            <div className='flex justify-center flex-col sm:flex-row '>
                <div className='sm:px-8'>
                    
                <a href="https://twitter.com/pratikdevdas"> <Image src="/icons/twitter.svg" height={15} width={15} alt='twitter'/> @pratikdevdas </a>
                </div>
                <div className='sm:px-4'>
                <a href="https://github.com/pratikdevdas">  <Image src="/icons/github.svg" height={15} width={15} alt='github'/>  pratikdevdas </a>
                </div>
                <div className='sm:px-4'>
                <a href="https://www.linkedin.com/in/pratikdevdas/">  <Image src="/icons/linkedin.svg" height={15} width={15} alt='linkedin'/> pratikdevdas </a>
                </div>
                <div className='sm:px-8'>
                <a href="mailto:pratikdevdas@outlook.com">  <Image src="/icons/email.svg" height={15} width={15} alt='email'/>pratikdevdas@outlook.com</a>

                </div>
            </div>
        </div>
  );
}

export default Footer;
